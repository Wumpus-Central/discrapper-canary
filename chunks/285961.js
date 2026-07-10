"use strict";
n.d(t, { d5: () => F, Ay: () => V, uG: () => x });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(735438),
    o = n.n(l);
n(321073);
class d {
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
    u = n(661531),
    _ = n(939249),
    E = n(834730),
    A = n(825484),
    h = n(821609),
    I = n(27232),
    f = n(364522),
    p = n(92008),
    T = n(497685),
    m = n(25277),
    g = n(537652),
    S = n(267102),
    N = n(202803),
    C = n(439401),
    R = n(998218),
    O = n(327143),
    L = n(652215),
    D = n(375708),
    y = n(931102);
let v = [u.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, u.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
    b = Array.from({ length: 16 }).map((e, t) => ({ id: `${t}`, height: Math.floor(100 * Math.random()) + 120 }));
function M(e) {
    return e.id ?? e.src;
}
function P(e, t) {
    let n = b[t];
    return null == n ? 0 : n.height;
}
function U(e, t, n, r) {
    if (!(e > 0))
        return null == b[t]
            ? null
            : (0, i.jsx)("div", { className: y.qf, style: { animationDelay: `${75 * t}ms`, ...n } }, r);
}
function w(e, t) {
    return e > 0 ? "" : (b[t]?.id ?? "");
}
function G(e) {
    return e === c.TL.VIDEO;
}
class x extends r.PureComponent {
    ref = null;
    _video = null;
    _image = null;
    _mounted = !0;
    constructor(e) {
        super(e);
        const { format: t, color: n, imagePool: i } = this.props;
        (this.state = { color: null == n ? o().sample(v) : n, loaded: !1 }),
            G(t) ||
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
            ref: a,
        } = this;
        if (e !== c.TL.VIDEO || null == a) return;
        let s = r.getElement();
        (s.oncanplay = this.handleCanPlay),
            (s.src = t),
            (s.width = n),
            (s.height = i),
            a.appendChild(s),
            (this._video = s);
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
                coords: { width: r, height: a },
            } = this.props,
            { loaded: s } = this.state;
        return s
            ? (0, i.jsx)("img", {
                  src:
                      ((t =
                          null != (e = R.A.toURLSafe(n)) &&
                          ((0, N.BX)(e) || (0, N.fr)(e)) &&
                          e.pathname.toLowerCase().endsWith(".gif")),
                      null != e &&
                      ((((0, N.BX)(e) || (0, N.fr)(e)) &&
                          (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))) ||
                          t)
                          ? (t && e.searchParams.set("format", "webp"),
                            e.searchParams.set("animated", "true"),
                            e.toString())
                          : n),
                  width: r,
                  height: a,
                  className: y.nX,
                  alt: "",
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: n, coords: r, focused: a, selected: s, "aria-label": l } = this.props,
            { color: o, loaded: d } = this.state;
        return (0, i.jsxs)(_.D, {
            tabIndex: -1,
            "aria-label": l,
            innerRef: (e) => {
                this.ref = e;
            },
            className: y.Ke,
            "data-focused": a,
            "data-selected": s,
            onClick: this.handleClick,
            style: { backgroundColor: d ? void 0 : o, ...r },
            children: [G(n) ? null : this.renderGIF(), null != t ? t(e) : null],
        });
    }
}
class k extends r.PureComponent {
    _masonryRef = r.createRef();
    prevResultQuery = null;
    state = { focusedId: null };
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === L.dD.FAVORITES && ((0, T.Qh)(L.dD.FAVORITES), (0, T.H9)(t, L.dD.FAVORITES, { limit: null }));
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let n = t.getCoordsMap()[e];
        null != n &&
            (t.scrollIntoViewRect({ start: n.top - 10, end: n.top + n.height + 10 }), this.setState({ focusedId: e }));
    };
    selectItem(e, t) {
        let { onSelectGIF: n, resultType: i, data: r, resultQuery: a } = this.props;
        null != n && n(e),
            (0, T.g4)({
                type: i,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: r.length,
                totalResults: this.props.searchTotalResults,
                query: a,
                gifId: e.id,
            });
    }
    handleSelect = (e) => {
        let t,
            { data: n } = this.props,
            i = n.findIndex((t) => M(t) === e);
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
        i - n <= 1220 && (e !== this.prevResultQuery && (0, T._E)(e), (this.prevResultQuery = e));
    };
    renderItem = (e, t, n, r) => {
        var a;
        let s, l;
        if (e > 0) return null;
        let { focusedId: o } = this.state,
            { selectedGIF: d } = this.props,
            c = this.props.data[t];
        if (null == c) return null;
        let u = null != d && M(d) === M(c);
        return (0, i.jsx)(
            x,
            {
                item: c,
                index: t,
                format: c.format,
                src: c.src,
                coords: n,
                onClick: this.handleClickItem,
                renderExtras: () => (0, i.jsx)(C.A, { className: y.uJ, ...c }),
                focused: M(c) === o,
                imagePool: this.props.imagePool,
                videoPool: this.props.videoPool,
                selected: u,
                "aria-label":
                    ((a = c.src),
                    (s = a.split("/").pop()),
                    null == (l = s?.split(".")[0]) ||
                    "" === l ||
                    l.length < 4 ||
                    (l.length >= 8 && /^[0-9a-f]+$/i.test(l)) ||
                    (l.length > 12 && !/[-_ ]/.test(l) && /\d/.test(l)) ||
                    /^(giphy|tenor|\d+[wh]?|xs|sm|md|lg|xl)$/i.test(l)
                        ? D.intl.formatToPlainString(D.t["5iIGZI"], { index: t + 1 })
                        : l),
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
        let { onSelectSuggestion: a, suggestions: s } = this.props;
        return 1 === e
            ? (0, i.jsx)(
                  "div",
                  {
                      className: y.jZ,
                      style: t,
                      children:
                          s.length > 0
                              ? (0, i.jsxs)(r.Fragment, {
                                    children: [
                                        (0, i.jsx)(E.E, {
                                            variant: "text-md/medium",
                                            color: "text-feedback-warning",
                                            className: y.Z4,
                                            children: D.intl.string(D.t["3JGJo2"]),
                                        }),
                                        (0, i.jsx)(A.e, {
                                            size: "sm",
                                            className: y.yB,
                                            children: s.map((e) =>
                                                (0, i.jsx)(
                                                    h.$,
                                                    {
                                                        variant: "secondary",
                                                        onClick: () => {
                                                            a(e);
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
            className: y.LA,
            children:
                null != e
                    ? (0, i.jsxs)("div", {
                          className: y.BA,
                          children: [
                              t ? (0, i.jsx)(I.G, { size: "xs", color: "currentColor", className: y.$2 }) : null,
                              (0, i.jsx)("div", { className: y.i6, children: e }),
                          ],
                      })
                    : (0, i.jsx)("div", { className: y.Hc }),
        });
    }
    renderEmptyFavorites() {
        return (0, i.jsx)(f.Ip, {
            className: y.Xv,
            fade: !0,
            children: (0, i.jsxs)("div", {
                className: y.Ep,
                children: [
                    this.renderEmptyFavorite(D.intl.string(D.t["3gyw4Z"]), !0),
                    this.renderEmptyFavorite(D.intl.string(D.t.yThUi4)),
                    this.renderEmptyFavorite(D.intl.string(D.t.MeP0SF)),
                    Array.from({ length: 15 }).map((e, t) =>
                        (0, i.jsx)(r.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(D.intl.string(D.t["5u99Xb"])),
                    Array.from({ length: 16 }).map((e, t) =>
                        (0, i.jsx)(r.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(D.intl.string(D.t.o6CLL4)),
                ],
            }),
        });
    }
    renderContent = (e, t, n) => {
        let { className: r, data: a, resultQuery: l, query: o, resultType: d } = this.props;
        return 0 === a.length && (l !== o || d === L.dD.TRENDING_GIFS)
            ? (0, i.jsx)(
                  p.f,
                  {
                      fade: !0,
                      className: s()(y.Xv, r),
                      sections: [b.length],
                      columns: e,
                      itemGutter: 12,
                      getItemKey: w,
                      getItemHeight: P,
                      renderItem: U,
                      chunkSize: 128,
                  },
                  l,
              )
            : (0, i.jsx)(
                  p.f,
                  {
                      ref: this._masonryRef,
                      fade: !0,
                      itemGutter: 12,
                      className: s()(y.Xv, r),
                      columns: e,
                      sections: [a.length, 0],
                      getItemKey: this.getItemKey,
                      getItemHeight: this.getItemHeight,
                      renderItem: this.renderItem,
                      getSectionHeight: this.getSectionHeight,
                      renderSection: this.renderSection,
                      onScroll: this.handleScroll,
                      chunkSize: 128,
                  },
                  `${l}-${d ?? ""}`,
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
        return 0 === e.length && t === n && r !== L.dD.TRENDING_GIFS
            ? r === L.dD.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, i.jsx)(g.A, { message: D.intl.string(D.t["5dX4UM"]), className: y.wV })
            : (0, i.jsx)(
                  m.A,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, i.jsx)(O.A, { desiredItemWidth: 200, maxColumns: 8, children: this.renderContent }),
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
                new d(
                    () => t.createElement("img"),
                    (e) => {
                        (e.onload = null), (e.src = "");
                    },
                ),
        ),
        [i] = r.useState(
            () =>
                new d(
                    () => {
                        let e = t.createElement("video");
                        return (
                            (e.className = y.nX),
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
    return (0, i.jsx)(k, { ...e, ...t });
};
