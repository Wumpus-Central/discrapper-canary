"use strict";
n.d(t, { d5: () => F, Ay: () => V, uG: () => U });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o);
n(321073);
class u {
    _elements;
    _createElement;
    _cleanElement;
    constructor(e, t) {
        (this._elements = []), (this._createElement = e), (this._cleanElement = t);
    }
    getElement() {
        return 0 === this._elements.length ? this._createElement() : this._elements.pop();
    }
    poolElement(e) {
        this._cleanElement(e), this._elements.push(e);
    }
    clearPool() {
        this._elements.length = 0;
    }
}
var c = n(803805),
    d = n(661531),
    _ = n(939249),
    h = n(834730),
    f = n(825484),
    p = n(821609),
    E = n(27232),
    m = n(364522),
    g = n(92008),
    A = n(497685),
    I = n(25277),
    T = n(537652),
    S = n(267102),
    y = n(202803),
    C = n(439401),
    N = n(998218),
    v = n(327143),
    R = n(652215),
    O = n(375708),
    b = n(931102);
let D = [d.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
    L = Array.from({ length: 16 }).map((e, t) => ({ id: `${t}`, height: Math.floor(100 * Math.random()) + 120 }));
function w(e) {
    return e.id ?? e.src;
}
function M(e, t) {
    let n = L[t];
    return null == n ? 0 : n.height;
}
function P(e, t, n, r) {
    if (!(e > 0))
        return null == L[t]
            ? null
            : (0, i.jsx)("div", { className: b.qf, style: { animationDelay: `${75 * t}ms`, ...n } }, r);
}
function x(e, t) {
    return e > 0 ? "" : (L[t]?.id ?? "");
}
function k(e) {
    return e === c.TL.VIDEO;
}
class U extends r.PureComponent {
    ref = null;
    _video = null;
    _image = null;
    _mounted = !0;
    constructor(e) {
        super(e);
        const { format: t, color: n, imagePool: i } = this.props;
        (this.state = { color: null == n ? l().sample(D) : n, loaded: !1 }),
            k(t) ||
                ((this._image = i.getElement()),
                (this._image.onload = () => this.setState({ loaded: !0 })),
                (this._image.src = e.src));
    }
    componentDidMount() {
        let {
            props: {
                format: e,
                src: t,
                coords: { width: n, height: i },
                videoPool: r,
            },
            ref: s,
        } = this;
        if (e !== c.TL.VIDEO || null == s) return;
        let a = r.getElement();
        (a.oncanplay = this.handleCanPlay),
            (a.src = t),
            (a.width = n),
            (a.height = i),
            s.appendChild(a),
            (this._video = a);
    }
    componentDidUpdate(e) {
        let { width: t, height: n } = this.props.coords;
        null != this._video &&
            (e.coords.width !== t || e.coords.height !== n) &&
            ((this._video.width = t), (this._video.height = n));
    }
    componentWillUnmount() {
        this._mounted = !1;
        let { _image: e, _video: t } = this,
            { imagePool: n, videoPool: i } = this.props;
        null != e && ((this._image = null), n.poolElement(e)), null != t && ((this._video = null), i.poolElement(t));
    }
    handleCanPlay = () => {
        this._mounted && this.setState({ loaded: !0 });
    };
    handleClick = () => {
        let { onClick: e, item: t, index: n } = this.props;
        null != e && e(t, n);
    };
    renderGIF() {
        let e,
            t,
            {
                src: n,
                coords: { width: r, height: s },
            } = this.props,
            { loaded: a } = this.state;
        return a
            ? (0, i.jsx)("img", {
                  src:
                      ((t =
                          null != (e = N.A.toURLSafe(n)) &&
                          ((0, y.BX)(e) || (0, y.fr)(e)) &&
                          e.pathname.toLowerCase().endsWith(".gif")),
                      null != e &&
                      ((((0, y.BX)(e) || (0, y.fr)(e)) &&
                          (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))) ||
                          t)
                          ? (t && e.searchParams.set("format", "webp"),
                            e.searchParams.set("animated", "true"),
                            e.toString())
                          : n),
                  width: r,
                  height: s,
                  className: b.nX,
                  alt: "",
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: n, coords: r, focused: s, selected: a, "aria-label": o } = this.props,
            { color: l, loaded: u } = this.state;
        return (0, i.jsxs)(_.D, {
            tabIndex: -1,
            "aria-label": o,
            innerRef: (e) => {
                this.ref = e;
            },
            className: b.Ke,
            "data-focused": s,
            "data-selected": a,
            onClick: this.handleClick,
            style: { backgroundColor: u ? void 0 : l, ...r },
            children: [k(n) ? null : this.renderGIF(), null != t ? t(e) : null],
        });
    }
}
class G extends r.PureComponent {
    _masonryRef = r.createRef();
    prevResultQuery = null;
    state = { focusedId: null };
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === R.dD.FAVORITES && ((0, A.Qh)(R.dD.FAVORITES), (0, A.H9)(t, R.dD.FAVORITES, { limit: null }));
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let n = t.getCoordsMap()[e];
        null != n &&
            (t.scrollIntoViewRect({ start: n.top - 10, end: n.top + n.height + 10 }), this.setState({ focusedId: e }));
    };
    selectItem(e, t) {
        let { onSelectGIF: n, resultType: i, data: r, resultQuery: s } = this.props;
        null != n && n(e),
            (0, A.g4)({
                type: i,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: r.length,
                totalResults: this.props.searchTotalResults,
                query: s,
                gifId: e.id,
            });
    }
    handleSelect = (e) => {
        let t,
            { data: n } = this.props,
            i = n.findIndex((t) => w(t) === e);
        -1 !== i && (t = n[i]), null != t && this.selectItem(t, i);
    };
    handleClickItem = (e, t) => {
        this.selectItem(e, t);
    };
    handleScroll = () => {
        let { resultQuery: e } = this.props,
            { current: t } = this._masonryRef;
        if (null == t) return;
        let { scrollTop: n, scrollHeight: i } = t.getScrollerState();
        i - n <= 1220 && (e !== this.prevResultQuery && (0, A._E)(e), (this.prevResultQuery = e));
    };
    renderItem = (e, t, n, r) => {
        var s;
        let a, o;
        if (e > 0) return null;
        let { focusedId: l } = this.state,
            { selectedGIF: u } = this.props,
            c = this.props.data[t];
        if (null == c) return null;
        let d = null != u && w(u) === w(c);
        return (0, i.jsx)(
            U,
            {
                item: c,
                index: t,
                format: c.format,
                src: c.src,
                coords: n,
                onClick: this.handleClickItem,
                renderExtras: () => (0, i.jsx)(C.A, { className: b.uJ, ...c }),
                focused: w(c) === l,
                imagePool: this.props.imagePool,
                videoPool: this.props.videoPool,
                selected: d,
                "aria-label":
                    ((s = c.src),
                    (a = s.split("/").pop()),
                    null == (o = a?.split(".")[0]) ||
                    "" === o ||
                    o.length < 4 ||
                    (o.length >= 8 && /^[0-9a-f]+$/i.test(o)) ||
                    (o.length > 12 && !/[-_ ]/.test(o) && /\d/.test(o)) ||
                    /^(giphy|tenor|\d+[wh]?|xs|sm|md|lg|xl)$/i.test(o)
                        ? O.intl.formatToPlainString(O.t["5iIGZI"], { index: t + 1 })
                        : o),
            },
            r,
        );
    };
    getItemHeight = (e, t, n) => {
        if (e > 0) return 0;
        let i = this.props.data[t];
        return null == i ? 0 : n * (i.height / i.width);
    };
    getItemKey = (e, t) => {
        if (e > 0) return null;
        let n = this.props.data[t];
        return null != n ? (n.id ?? n.src) : null;
    };
    getSectionHeight(e) {
        return 220 * (1 === e);
    }
    renderSection = (e, t, n) => {
        let { onSelectSuggestion: s, suggestions: a } = this.props;
        return 1 === e
            ? (0, i.jsx)(
                  "div",
                  {
                      className: b.jZ,
                      style: t,
                      children:
                          a.length > 0
                              ? (0, i.jsxs)(r.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.E, {
                                            variant: "text-md/medium",
                                            color: "text-feedback-warning",
                                            className: b.Z4,
                                            children: O.intl.string(O.t["3JGJo2"]),
                                        }),
                                        (0, i.jsx)(f.e, {
                                            size: "sm",
                                            className: b.yB,
                                            children: a.map((e) =>
                                                (0, i.jsx)(
                                                    p.$,
                                                    {
                                                        variant: "secondary",
                                                        onClick: () => {
                                                            s(e);
                                                        },
                                                        text: e,
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                    ],
                                })
                              : null,
                  },
                  n,
              )
            : null;
    };
    renderEmptyFavorite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.jsx)("div", {
            className: b.LA,
            children:
                null != e
                    ? (0, i.jsxs)("div", {
                          className: b.BA,
                          children: [
                              t ? (0, i.jsx)(E.G, { size: "xs", color: "currentColor", className: b.$2 }) : null,
                              (0, i.jsx)("div", { className: b.i6, children: e }),
                          ],
                      })
                    : (0, i.jsx)("div", { className: b.Hc }),
        });
    }
    renderEmptyFavorites() {
        return (0, i.jsx)(m.Ip, {
            className: b.Xv,
            fade: !0,
            children: (0, i.jsxs)("div", {
                className: b.Ep,
                children: [
                    this.renderEmptyFavorite(O.intl.string(O.t["3gyw4Z"]), !0),
                    this.renderEmptyFavorite(O.intl.string(O.t.yThUi4)),
                    this.renderEmptyFavorite(O.intl.string(O.t.MeP0SF)),
                    Array.from({ length: 15 }).map((e, t) =>
                        (0, i.jsx)(r.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(O.intl.string(O.t["5u99Xb"])),
                    Array.from({ length: 16 }).map((e, t) =>
                        (0, i.jsx)(r.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(O.intl.string(O.t.o6CLL4)),
                ],
            }),
        });
    }
    renderContent = (e, t, n) => {
        let { className: r, data: s, resultQuery: o, query: l, resultType: u } = this.props;
        return 0 === s.length && (o !== l || u === R.dD.TRENDING_GIFS)
            ? (0, i.jsx)(
                  g.f,
                  {
                      fade: !0,
                      className: a()(b.Xv, r),
                      sections: [L.length],
                      columns: e,
                      itemGutter: 12,
                      getItemKey: x,
                      getItemHeight: M,
                      renderItem: P,
                      chunkSize: 128,
                  },
                  o,
              )
            : (0, i.jsx)(
                  g.f,
                  {
                      ref: this._masonryRef,
                      fade: !0,
                      itemGutter: 12,
                      className: a()(b.Xv, r),
                      columns: e,
                      sections: [s.length, 0],
                      getItemKey: this.getItemKey,
                      getItemHeight: this.getItemHeight,
                      renderItem: this.renderItem,
                      getSectionHeight: this.getSectionHeight,
                      renderSection: this.renderSection,
                      onScroll: this.handleScroll,
                      chunkSize: 128,
                  },
                  `${o}-${u ?? ""}`,
              );
    };
    getItemGrid = () => {
        let { current: e } = this._masonryRef;
        return null != e ? e.getItemGrid() : [];
    };
    getCoordsMap = () => {
        let { current: e } = this._masonryRef;
        return null != e ? e.getCoordsMap() : {};
    };
    render() {
        let { data: e, resultQuery: t, query: n, resultType: r } = this.props;
        return 0 === e.length && t === n && r !== R.dD.TRENDING_GIFS
            ? r === R.dD.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, i.jsx)(T.A, { message: O.intl.string(O.t["5dX4UM"]), className: b.wV })
            : (0, i.jsx)(
                  I.A,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, i.jsx)(v.A, { desiredItemWidth: 200, maxColumns: 8, children: this.renderContent }),
                  },
                  t,
              );
    }
}
function F() {
    let { renderWindow: e } = r.useContext(S.Ay),
        t = e.document,
        [n] = r.useState(
            () =>
                new u(
                    () => t.createElement("img"),
                    (e) => {
                        (e.onload = null), (e.src = "");
                    },
                ),
        ),
        [i] = r.useState(
            () =>
                new u(
                    () => {
                        let e = t.createElement("video");
                        return (
                            (e.className = b.nX),
                            (e.autoplay = !0),
                            (e.loop = !0),
                            (e.muted = !0),
                            (e.preload = "auto"),
                            (e.controls = !1),
                            e
                        );
                    },
                    (e) => {
                        (e.src = ""), (e.oncanplay = null);
                        let { parentNode: t } = e;
                        null != t && t.removeChild(e);
                    },
                ),
        );
    return { imagePool: n, videoPool: i };
}
let V = function (e) {
    let t = F();
    return (0, i.jsx)(G, { ...e, ...t });
};
