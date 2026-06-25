"use strict";
n.d(t, { d5: () => G, Ay: () => F, uG: () => k });
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
    h = n(825484),
    f = n(821609),
    p = n(27232),
    E = n(364522),
    m = n(92008),
    g = n(497685),
    A = n(25277),
    I = n(537652),
    T = n(267102),
    S = n(202803),
    y = n(439401),
    C = n(998218),
    N = n(327143),
    v = n(652215),
    R = n(375708),
    O = n(52510);
let b = [d.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
    D = Array.from({ length: 16 }).map((e, t) => ({ id: `${t}`, height: Math.floor(100 * Math.random()) + 120 }));
function L(e) {
    return e.id ?? e.src;
}
function w(e, t) {
    let n = D[t];
    return null == n ? 0 : n.height;
}
function M(e, t, n, r) {
    if (!(e > 0))
        return null == D[t]
            ? null
            : (0, i.jsx)("div", { className: O.qf, style: { animationDelay: `${75 * t}ms`, ...n } }, r);
}
function P(e, t) {
    return e > 0 ? "" : (D[t]?.id ?? "");
}
function x(e) {
    return e === c.TL.VIDEO;
}
class k extends r.PureComponent {
    ref = null;
    _video = null;
    _image = null;
    _mounted = !0;
    constructor(e) {
        super(e);
        const { format: t, color: n, imagePool: i } = this.props;
        (this.state = { color: null == n ? l().sample(b) : n, loaded: !1 }),
            x(t) ||
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
                          null != (e = C.A.toURLSafe(n)) &&
                          ((0, S.BX)(e) || (0, S.fr)(e)) &&
                          e.pathname.toLowerCase().endsWith(".gif")),
                      null != e &&
                      ((((0, S.BX)(e) || (0, S.fr)(e)) &&
                          (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))) ||
                          t)
                          ? (t && e.searchParams.set("format", "webp"),
                            e.searchParams.set("animated", "true"),
                            e.toString())
                          : n),
                  width: r,
                  height: s,
                  className: O.nX,
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
            className: O.Ke,
            "data-focused": s,
            "data-selected": a,
            onClick: this.handleClick,
            style: { backgroundColor: u ? void 0 : l, ...r },
            children: [x(n) ? null : this.renderGIF(), null != t ? t(e) : null],
        });
    }
}
class U extends r.PureComponent {
    _masonryRef = r.createRef();
    prevResultQuery = null;
    state = { focusedId: null };
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === v.dD.FAVORITES && ((0, g.Qh)(v.dD.FAVORITES), (0, g.H9)(t, v.dD.FAVORITES, { limit: null }));
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
            (0, g.g4)({
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
            i = n.findIndex((t) => L(t) === e);
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
        i - n <= 1220 && (e !== this.prevResultQuery && (0, g._E)(e), (this.prevResultQuery = e));
    };
    renderItem = (e, t, n, r) => {
        var s;
        let a, o;
        if (e > 0) return null;
        let { focusedId: l } = this.state,
            { selectedGIF: u } = this.props,
            c = this.props.data[t];
        if (null == c) return null;
        let d = null != u && L(u) === L(c);
        return (0, i.jsx)(
            k,
            {
                item: c,
                index: t,
                format: c.format,
                src: c.src,
                coords: n,
                onClick: this.handleClickItem,
                renderExtras: () => (0, i.jsx)(y.A, { className: O.uJ, ...c }),
                focused: L(c) === l,
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
                        ? R.intl.formatToPlainString(R.t["5iIGZI"], { index: t + 1 })
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
                      className: O.jZ,
                      style: t,
                      children:
                          a.length > 0
                              ? (0, i.jsxs)(r.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", { className: O.Z4, children: R.intl.string(R.t["3JGJo2"]) }),
                                        (0, i.jsx)(h.e, {
                                            size: "sm",
                                            className: O.yB,
                                            children: a.map((e) =>
                                                (0, i.jsx)(
                                                    f.$,
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
            className: O.LA,
            children:
                null != e
                    ? (0, i.jsxs)("div", {
                          className: O.BA,
                          children: [
                              t ? (0, i.jsx)(p.G, { size: "xs", color: "currentColor", className: O.$2 }) : null,
                              (0, i.jsx)("div", { className: O.i6, children: e }),
                          ],
                      })
                    : (0, i.jsx)("div", { className: O.Hc }),
        });
    }
    renderEmptyFavorites() {
        return (0, i.jsx)(E.Ip, {
            className: O.Xv,
            fade: !0,
            children: (0, i.jsxs)("div", {
                className: O.Ep,
                children: [
                    this.renderEmptyFavorite(R.intl.string(R.t["3gyw4Z"]), !0),
                    this.renderEmptyFavorite(R.intl.string(R.t.yThUi4)),
                    this.renderEmptyFavorite(R.intl.string(R.t.MeP0SF)),
                    Array.from({ length: 15 }).map((e, t) =>
                        (0, i.jsx)(r.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(R.intl.string(R.t["5u99Xb"])),
                    Array.from({ length: 16 }).map((e, t) =>
                        (0, i.jsx)(r.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(R.intl.string(R.t.o6CLL4)),
                ],
            }),
        });
    }
    renderContent = (e, t, n) => {
        let { className: r, data: s, resultQuery: o, query: l, resultType: u } = this.props;
        return 0 === s.length && (o !== l || u === v.dD.TRENDING_GIFS)
            ? (0, i.jsx)(
                  m.f,
                  {
                      fade: !0,
                      className: a()(O.Xv, r),
                      sections: [D.length],
                      columns: e,
                      itemGutter: 12,
                      getItemKey: P,
                      getItemHeight: w,
                      renderItem: M,
                      chunkSize: 128,
                  },
                  o,
              )
            : (0, i.jsx)(
                  m.f,
                  {
                      ref: this._masonryRef,
                      fade: !0,
                      itemGutter: 12,
                      className: a()(O.Xv, r),
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
        return 0 === e.length && t === n && r !== v.dD.TRENDING_GIFS
            ? r === v.dD.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, i.jsx)(I.A, { message: R.intl.string(R.t["5dX4UM"]), className: O.wV })
            : (0, i.jsx)(
                  A.A,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, i.jsx)(N.A, { desiredItemWidth: 200, maxColumns: 8, children: this.renderContent }),
                  },
                  t,
              );
    }
}
function G() {
    let { renderWindow: e } = r.useContext(T.Ay),
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
                            (e.className = O.nX),
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
let F = function (e) {
    let t = G();
    return (0, i.jsx)(U, { ...e, ...t });
};
