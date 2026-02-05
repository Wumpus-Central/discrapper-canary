"use strict";
n.d(t, { Ay: () => V, d5: () => G, uG: () => k });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(152501),
    c = n(803805),
    d = n(827734),
    _ = n(397927),
    f = n(497685),
    p = n(25277),
    h = n(537652),
    m = n(267102),
    g = n(202803),
    E = n(439401),
    A = n(998218),
    I = n(327143),
    T = n(652215),
    y = n(985018),
    S = n(432391);
let v = [d.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
    C = 220,
    b = 1220,
    N = Array.from({ length: 16 }).map((e, t) => ({ id: `${t}`, height: Math.floor(100 * Math.random()) + 120 }));
function R(e) {
    return e.id ?? e.src;
}
function O(e, t) {
    let n = N[t];
    return null == n ? 0 : n.height;
}
function D(e, t, n, i) {
    if (!(e > 0))
        return null == N[t]
            ? null
            : (0, r.jsx)("div", { className: S.qf, style: { animationDelay: `${75 * t}ms`, ...n } }, i);
}
function L(e, t) {
    return e > 0 ? "" : (N[t]?.id ?? "");
}
function w(e) {
    return e === c.TL.VIDEO;
}
function x(e) {
    return (
        ((0, g.BX)(e) || (0, g.fr)(e)) &&
        (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))
    );
}
function P(e) {
    return ((0, g.BX)(e) || (0, g.fr)(e)) && e.pathname.toLowerCase().endsWith(".gif");
}
function M(e) {
    let t = A.A.toURLSafe(e),
        n = null != t && P(t);
    return null != t && (x(t) || n)
        ? (n && t.searchParams.set("format", "webp"), t.searchParams.set("animated", "true"), t.toString())
        : e;
}
class k extends i.PureComponent {
    ref = null;
    _video = null;
    _image = null;
    _mounted = !0;
    constructor(e) {
        super(e);
        const { format: t, color: n, imagePool: r } = this.props;
        (this.state = { color: null == n ? l().sample(v) : n, loaded: !1 }),
            w(t) ||
                ((this._image = r.getElement()),
                (this._image.onload = () => this.setState({ loaded: !0 })),
                (this._image.src = e.src));
    }
    componentDidMount() {
        let {
            props: {
                format: e,
                src: t,
                coords: { width: n, height: r },
                videoPool: i,
            },
            ref: a,
        } = this;
        if (e !== c.TL.VIDEO || null == a) return;
        let s = i.getElement();
        (s.oncanplay = this.handleCanPlay),
            (s.src = t),
            (s.width = n),
            (s.height = r),
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
            { imagePool: n, videoPool: r } = this.props;
        null != e && ((this._image = null), n.poolElement(e)), null != t && ((this._video = null), r.poolElement(t));
    }
    handleCanPlay = () => {
        this._mounted && this.setState({ loaded: !0 });
    };
    handleClick = () => {
        let { onClick: e, item: t, index: n } = this.props;
        null != e && e(t, n);
    };
    renderGIF() {
        let {
                src: e,
                coords: { width: t, height: n },
            } = this.props,
            { loaded: i } = this.state;
        return i ? (0, r.jsx)("img", { src: M(e), width: t, height: n, className: S.nX, alt: "" }) : null;
    }
    render() {
        let { item: e, renderExtras: t, format: n, coords: i, focused: a, selected: s } = this.props,
            { color: o, loaded: l } = this.state;
        return (0, r.jsxs)(_.DUT, {
            tabIndex: -1,
            innerRef: (e) => {
                this.ref = e;
            },
            className: S.Ke,
            "data-focused": a,
            "data-selected": s,
            onClick: this.handleClick,
            style: { backgroundColor: l ? void 0 : o, ...i },
            children: [w(n) ? null : this.renderGIF(), null != t ? t(e) : null],
        });
    }
}
class U extends i.PureComponent {
    _masonryRef = i.createRef();
    prevResultQuery = null;
    state = { focusedId: null };
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === T.dD.FAVORITES && ((0, f.Qh)(T.dD.FAVORITES), (0, f.H9)(t, T.dD.FAVORITES, { limit: null }));
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let n = t.getCoordsMap()[e];
        null != n &&
            (t.scrollIntoViewRect({ start: n.top - 10, end: n.top + n.height + 10 }), this.setState({ focusedId: e }));
    };
    selectItem(e, t) {
        let { onSelectGIF: n, resultType: r, data: i, resultQuery: a } = this.props;
        null != n && n(e),
            (0, f.g4)({
                type: r,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: i.length,
                totalResults: this.props.searchTotalResults,
                query: a,
                gifId: e.id,
            });
    }
    handleSelect = (e) => {
        let t,
            { data: n } = this.props,
            r = n.findIndex((t) => R(t) === e);
        -1 !== r && (t = n[r]), null != t && this.selectItem(t, r);
    };
    handleClickItem = (e, t) => {
        this.selectItem(e, t);
    };
    handleScroll = () => {
        let { resultQuery: e } = this.props,
            { current: t } = this._masonryRef;
        if (null == t) return;
        let { scrollTop: n, scrollHeight: r } = t.getScrollerState();
        r - n <= b && (e !== this.prevResultQuery && (0, f._E)(e), (this.prevResultQuery = e));
    };
    renderItem = (e, t, n, i) => {
        if (e > 0) return null;
        let { focusedId: a } = this.state,
            { selectedGIF: s } = this.props,
            o = this.props.data[t];
        if (null == o) return null;
        let l = null != s && R(s) === R(o);
        return (0, r.jsx)(
            k,
            {
                item: o,
                index: t,
                format: o.format,
                src: o.src,
                coords: n,
                onClick: this.handleClickItem,
                renderExtras: () => (0, r.jsx)(E.A, { className: S.uJ, ...o }),
                focused: R(o) === a,
                imagePool: this.props.imagePool,
                videoPool: this.props.videoPool,
                selected: l,
            },
            i,
        );
    };
    getItemHeight = (e, t, n) => {
        if (e > 0) return 0;
        let r = this.props.data[t];
        return null == r ? 0 : n * (r.height / r.width);
    };
    getItemKey = (e, t) => {
        if (e > 0) return null;
        let n = this.props.data[t];
        return null != n ? (n.id ?? n.src) : null;
    };
    getSectionHeight(e) {
        return 1 === e ? C : 0;
    }
    renderSection = (e, t, n) => {
        let { onSelectSuggestion: a, suggestions: s } = this.props;
        return 1 === e
            ? (0, r.jsx)(
                  "div",
                  {
                      className: S.jZ,
                      style: t,
                      children:
                          s.length > 0
                              ? (0, r.jsxs)(i.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: S.Z4, children: y.intl.string(y.t["3JGJo2"]) }),
                                        (0, r.jsx)(_.ButtonGroup, {
                                            size: "sm",
                                            className: S.yB,
                                            children: s.map((e) =>
                                                (0, r.jsx)(
                                                    _.Button,
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
        return (0, r.jsx)("div", {
            className: S.LA,
            children:
                null != e
                    ? (0, r.jsxs)("div", {
                          className: S.BA,
                          children: [
                              t ? (0, r.jsx)(_.Gg5, { size: "xs", color: "currentColor", className: S.$2 }) : null,
                              (0, r.jsx)("div", { className: S.i6, children: e }),
                          ],
                      })
                    : (0, r.jsx)("div", { className: S.Hc }),
        });
    }
    renderEmptyFavorites() {
        return (0, r.jsx)(_.HOs, {
            className: S.Xv,
            fade: !0,
            children: (0, r.jsxs)("div", {
                className: S.Ep,
                children: [
                    this.renderEmptyFavorite(y.intl.string(y.t["3gyw4Z"]), !0),
                    this.renderEmptyFavorite(y.intl.string(y.t.yThUi4)),
                    this.renderEmptyFavorite(y.intl.string(y.t.MeP0SF)),
                    Array.from({ length: 15 }).map((e, t) =>
                        (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(y.intl.string(y.t["5u99Xb"])),
                    Array.from({ length: 16 }).map((e, t) =>
                        (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(y.intl.string(y.t.o6CLL4)),
                ],
            }),
        });
    }
    renderContent = (e, t, n) => {
        let { className: i, data: a, resultQuery: o, query: l, resultType: u } = this.props;
        return 0 === a.length && (o !== l || u === T.dD.TRENDING_GIFS)
            ? (0, r.jsx)(
                  _.a0_,
                  {
                      fade: !0,
                      className: s()(S.Xv, i),
                      sections: [N.length],
                      columns: e,
                      itemGutter: 12,
                      getItemKey: L,
                      getItemHeight: O,
                      renderItem: D,
                      chunkSize: 128,
                  },
                  o,
              )
            : (0, r.jsx)(
                  _.a0_,
                  {
                      ref: this._masonryRef,
                      fade: !0,
                      itemGutter: 12,
                      className: s()(S.Xv, i),
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
        let { data: e, resultQuery: t, query: n, resultType: i } = this.props;
        return 0 === e.length && t === n && i !== T.dD.TRENDING_GIFS
            ? i === T.dD.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, r.jsx)(h.A, { message: y.intl.string(y.t["5dX4UM"]), className: S.wV })
            : (0, r.jsx)(
                  p.A,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, r.jsx)(I.A, { desiredItemWidth: 200, maxColumns: 8, children: this.renderContent }),
                  },
                  t,
              );
    }
}
function G() {
    let { renderWindow: e } = i.useContext(m.Ay),
        t = e.document,
        [n] = i.useState(
            () =>
                new u.R(
                    () => t.createElement("img"),
                    (e) => {
                        (e.onload = null), (e.src = "");
                    },
                ),
        ),
        [r] = i.useState(
            () =>
                new u.R(
                    () => {
                        let e = t.createElement("video");
                        return (
                            (e.className = S.nX),
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
    return { imagePool: n, videoPool: r };
}
let V = function (e) {
    let t = G();
    return (0, r.jsx)(U, { ...e, ...t });
};
