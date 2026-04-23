"use strict";
n.d(t, { Ay: () => F, d5: () => G, uG: () => k });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(152501),
    c = n(803805),
    d = n(827734),
    _ = n(939249),
    f = n(825484),
    p = n(821609),
    h = n(27232),
    E = n(573613),
    m = n(42286),
    g = n(497685),
    A = n(25277),
    I = n(537652),
    T = n(267102),
    S = n(202803),
    y = n(439401),
    N = n(998218),
    v = n(327143),
    C = n(652215),
    O = n(985018),
    R = n(931102);
let b = [d.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
    D = Array.from({ length: 16 }).map((e, t) => ({ id: `${t}`, height: Math.floor(100 * Math.random()) + 120 }));
function L(e) {
    return e.id ?? e.src;
}
function w(e, t) {
    let n = D[t];
    return null == n ? 0 : n.height;
}
function M(e, t, n, i) {
    if (!(e > 0))
        return null == D[t]
            ? null
            : (0, r.jsx)("div", { className: R.qf, style: { animationDelay: `${75 * t}ms`, ...n } }, i);
}
function P(e, t) {
    return e > 0 ? "" : (D[t]?.id ?? "");
}
function x(e) {
    return e === c.TL.VIDEO;
}
class k extends i.PureComponent {
    ref = null;
    _video = null;
    _image = null;
    _mounted = !0;
    constructor(e) {
        super(e);
        const { format: t, color: n, imagePool: r } = this.props;
        (this.state = { color: null == n ? l().sample(b) : n, loaded: !1 }),
            x(t) ||
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
            ref: s,
        } = this;
        if (e !== c.TL.VIDEO || null == s) return;
        let a = i.getElement();
        (a.oncanplay = this.handleCanPlay),
            (a.src = t),
            (a.width = n),
            (a.height = r),
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
        let e,
            t,
            {
                src: n,
                coords: { width: i, height: s },
            } = this.props,
            { loaded: a } = this.state;
        return a
            ? (0, r.jsx)("img", {
                  src:
                      ((t =
                          null != (e = N.A.toURLSafe(n)) &&
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
                  width: i,
                  height: s,
                  className: R.nX,
                  alt: "",
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: n, coords: i, focused: s, selected: a } = this.props,
            { color: o, loaded: l } = this.state;
        return (0, r.jsxs)(_.D, {
            tabIndex: -1,
            innerRef: (e) => {
                this.ref = e;
            },
            className: R.Ke,
            "data-focused": s,
            "data-selected": a,
            onClick: this.handleClick,
            style: { backgroundColor: l ? void 0 : o, ...i },
            children: [x(n) ? null : this.renderGIF(), null != t ? t(e) : null],
        });
    }
}
class U extends i.PureComponent {
    _masonryRef = i.createRef();
    prevResultQuery = null;
    state = { focusedId: null };
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === C.dD.FAVORITES && ((0, g.Qh)(C.dD.FAVORITES), (0, g.H9)(t, C.dD.FAVORITES, { limit: null }));
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let n = t.getCoordsMap()[e];
        null != n &&
            (t.scrollIntoViewRect({ start: n.top - 10, end: n.top + n.height + 10 }), this.setState({ focusedId: e }));
    };
    selectItem(e, t) {
        let { onSelectGIF: n, resultType: r, data: i, resultQuery: s } = this.props;
        null != n && n(e),
            (0, g.g4)({
                type: r,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: i.length,
                totalResults: this.props.searchTotalResults,
                query: s,
                gifId: e.id,
            });
    }
    handleSelect = (e) => {
        let t,
            { data: n } = this.props,
            r = n.findIndex((t) => L(t) === e);
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
        r - n <= 1220 && (e !== this.prevResultQuery && (0, g._E)(e), (this.prevResultQuery = e));
    };
    renderItem = (e, t, n, i) => {
        if (e > 0) return null;
        let { focusedId: s } = this.state,
            { selectedGIF: a } = this.props,
            o = this.props.data[t];
        if (null == o) return null;
        let l = null != a && L(a) === L(o);
        return (0, r.jsx)(
            k,
            {
                item: o,
                index: t,
                format: o.format,
                src: o.src,
                coords: n,
                onClick: this.handleClickItem,
                renderExtras: () => (0, r.jsx)(y.A, { className: R.uJ, ...o }),
                focused: L(o) === s,
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
        return 220 * (1 === e);
    }
    renderSection = (e, t, n) => {
        let { onSelectSuggestion: s, suggestions: a } = this.props;
        return 1 === e
            ? (0, r.jsx)(
                  "div",
                  {
                      className: R.jZ,
                      style: t,
                      children:
                          a.length > 0
                              ? (0, r.jsxs)(i.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: R.Z4, children: O.intl.string(O.t["3JGJo2"]) }),
                                        (0, r.jsx)(f.e, {
                                            size: "sm",
                                            className: R.yB,
                                            children: a.map((e) =>
                                                (0, r.jsx)(
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
        return (0, r.jsx)("div", {
            className: R.LA,
            children:
                null != e
                    ? (0, r.jsxs)("div", {
                          className: R.BA,
                          children: [
                              t ? (0, r.jsx)(h.G, { size: "xs", color: "currentColor", className: R.$2 }) : null,
                              (0, r.jsx)("div", { className: R.i6, children: e }),
                          ],
                      })
                    : (0, r.jsx)("div", { className: R.Hc }),
        });
    }
    renderEmptyFavorites() {
        return (0, r.jsx)(E.Ip, {
            className: R.Xv,
            fade: !0,
            children: (0, r.jsxs)("div", {
                className: R.Ep,
                children: [
                    this.renderEmptyFavorite(O.intl.string(O.t["3gyw4Z"]), !0),
                    this.renderEmptyFavorite(O.intl.string(O.t.yThUi4)),
                    this.renderEmptyFavorite(O.intl.string(O.t.MeP0SF)),
                    Array.from({ length: 15 }).map((e, t) =>
                        (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(O.intl.string(O.t["5u99Xb"])),
                    Array.from({ length: 16 }).map((e, t) =>
                        (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(O.intl.string(O.t.o6CLL4)),
                ],
            }),
        });
    }
    renderContent = (e, t, n) => {
        let { className: i, data: s, resultQuery: o, query: l, resultType: u } = this.props;
        return 0 === s.length && (o !== l || u === C.dD.TRENDING_GIFS)
            ? (0, r.jsx)(
                  m.f,
                  {
                      fade: !0,
                      className: a()(R.Xv, i),
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
            : (0, r.jsx)(
                  m.f,
                  {
                      ref: this._masonryRef,
                      fade: !0,
                      itemGutter: 12,
                      className: a()(R.Xv, i),
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
        let { data: e, resultQuery: t, query: n, resultType: i } = this.props;
        return 0 === e.length && t === n && i !== C.dD.TRENDING_GIFS
            ? i === C.dD.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, r.jsx)(I.A, { message: O.intl.string(O.t["5dX4UM"]), className: R.wV })
            : (0, r.jsx)(
                  A.A,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, r.jsx)(v.A, { desiredItemWidth: 200, maxColumns: 8, children: this.renderContent }),
                  },
                  t,
              );
    }
}
function G() {
    let { renderWindow: e } = i.useContext(T.Ay),
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
                            (e.className = R.nX),
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
let F = function (e) {
    let t = G();
    return (0, r.jsx)(U, { ...e, ...t });
};
