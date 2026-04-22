r.d(t, { Ay: () => b, d5: () => U, uG: () => M });
var s = r(627968),
    l = r(64700),
    n = r(503698),
    i = r.n(n),
    o = r(735438),
    a = r.n(o),
    c = r(152501),
    u = r(803805),
    d = r(827734),
    h = r(939249),
    m = r(825484),
    f = r(821609),
    p = r(27232),
    g = r(573613),
    E = r(42286),
    _ = r(497685),
    R = r(25277),
    I = r(537652),
    A = r(267102),
    C = r(202803),
    v = r(439401),
    w = r(998218),
    S = r(327143),
    y = r(652215),
    x = r(985018),
    T = r(52510);
let N = [d.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
    D = Array.from({ length: 16 }).map((e, t) => ({ id: `${t}`, height: Math.floor(100 * Math.random()) + 120 }));
function F(e) {
    return e.id ?? e.src;
}
function G(e, t) {
    let r = D[t];
    return null == r ? 0 : r.height;
}
function P(e, t, r, l) {
    if (!(e > 0))
        return null == D[t]
            ? null
            : (0, s.jsx)("div", { className: T.qf, style: { animationDelay: `${75 * t}ms`, ...r } }, l);
}
function j(e, t) {
    return e > 0 ? "" : (D[t]?.id ?? "");
}
function L(e) {
    return e === u.TL.VIDEO;
}
class M extends l.PureComponent {
    ref = null;
    _video = null;
    _image = null;
    _mounted = !0;
    constructor(e) {
        super(e);
        const { format: t, color: r, imagePool: s } = this.props;
        (this.state = { color: null == r ? a().sample(N) : r, loaded: !1 }),
            L(t) ||
                ((this._image = s.getElement()),
                (this._image.onload = () => this.setState({ loaded: !0 })),
                (this._image.src = e.src));
    }
    componentDidMount() {
        let {
            props: {
                format: e,
                src: t,
                coords: { width: r, height: s },
                videoPool: l,
            },
            ref: n,
        } = this;
        if (e !== u.TL.VIDEO || null == n) return;
        let i = l.getElement();
        (i.oncanplay = this.handleCanPlay),
            (i.src = t),
            (i.width = r),
            (i.height = s),
            n.appendChild(i),
            (this._video = i);
    }
    componentDidUpdate(e) {
        let { width: t, height: r } = this.props.coords;
        null != this._video &&
            (e.coords.width !== t || e.coords.height !== r) &&
            ((this._video.width = t), (this._video.height = r));
    }
    componentWillUnmount() {
        this._mounted = !1;
        let { _image: e, _video: t } = this,
            { imagePool: r, videoPool: s } = this.props;
        null != e && ((this._image = null), r.poolElement(e)), null != t && ((this._video = null), s.poolElement(t));
    }
    handleCanPlay = () => {
        this._mounted && this.setState({ loaded: !0 });
    };
    handleClick = () => {
        let { onClick: e, item: t, index: r } = this.props;
        null != e && e(t, r);
    };
    renderGIF() {
        let e,
            t,
            {
                src: r,
                coords: { width: l, height: n },
            } = this.props,
            { loaded: i } = this.state;
        return i
            ? (0, s.jsx)("img", {
                  src:
                      ((t =
                          null != (e = w.A.toURLSafe(r)) &&
                          ((0, C.BX)(e) || (0, C.fr)(e)) &&
                          e.pathname.toLowerCase().endsWith(".gif")),
                      null != e &&
                      ((((0, C.BX)(e) || (0, C.fr)(e)) &&
                          (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))) ||
                          t)
                          ? (t && e.searchParams.set("format", "webp"),
                            e.searchParams.set("animated", "true"),
                            e.toString())
                          : r),
                  width: l,
                  height: n,
                  className: T.nX,
                  alt: "",
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: r, coords: l, focused: n, selected: i } = this.props,
            { color: o, loaded: a } = this.state;
        return (0, s.jsxs)(h.D, {
            tabIndex: -1,
            innerRef: (e) => {
                this.ref = e;
            },
            className: T.Ke,
            "data-focused": n,
            "data-selected": i,
            onClick: this.handleClick,
            style: { backgroundColor: a ? void 0 : o, ...l },
            children: [L(r) ? null : this.renderGIF(), null != t ? t(e) : null],
        });
    }
}
class k extends l.PureComponent {
    _masonryRef = l.createRef();
    prevResultQuery = null;
    state = { focusedId: null };
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === y.dD.FAVORITES && ((0, _.Qh)(y.dD.FAVORITES), (0, _.H9)(t, y.dD.FAVORITES, { limit: null }));
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let r = t.getCoordsMap()[e];
        null != r &&
            (t.scrollIntoViewRect({ start: r.top - 10, end: r.top + r.height + 10 }), this.setState({ focusedId: e }));
    };
    selectItem(e, t) {
        let { onSelectGIF: r, resultType: s, data: l, resultQuery: n } = this.props;
        null != r && r(e),
            (0, _.g4)({
                type: s,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: l.length,
                totalResults: this.props.searchTotalResults,
                query: n,
                gifId: e.id,
            });
    }
    handleSelect = (e) => {
        let t,
            { data: r } = this.props,
            s = r.findIndex((t) => F(t) === e);
        -1 !== s && (t = r[s]), null != t && this.selectItem(t, s);
    };
    handleClickItem = (e, t) => {
        this.selectItem(e, t);
    };
    handleScroll = () => {
        let { resultQuery: e } = this.props,
            { current: t } = this._masonryRef;
        if (null == t) return;
        let { scrollTop: r, scrollHeight: s } = t.getScrollerState();
        s - r <= 1220 && (e !== this.prevResultQuery && (0, _._E)(e), (this.prevResultQuery = e));
    };
    renderItem = (e, t, r, l) => {
        if (e > 0) return null;
        let { focusedId: n } = this.state,
            { selectedGIF: i } = this.props,
            o = this.props.data[t];
        if (null == o) return null;
        let a = null != i && F(i) === F(o);
        return (0, s.jsx)(
            M,
            {
                item: o,
                index: t,
                format: o.format,
                src: o.src,
                coords: r,
                onClick: this.handleClickItem,
                renderExtras: () => (0, s.jsx)(v.A, { className: T.uJ, ...o }),
                focused: F(o) === n,
                imagePool: this.props.imagePool,
                videoPool: this.props.videoPool,
                selected: a,
            },
            l,
        );
    };
    getItemHeight = (e, t, r) => {
        if (e > 0) return 0;
        let s = this.props.data[t];
        return null == s ? 0 : r * (s.height / s.width);
    };
    getItemKey = (e, t) => {
        if (e > 0) return null;
        let r = this.props.data[t];
        return null != r ? (r.id ?? r.src) : null;
    };
    getSectionHeight(e) {
        return 220 * (1 === e);
    }
    renderSection = (e, t, r) => {
        let { onSelectSuggestion: n, suggestions: i } = this.props;
        return 1 === e
            ? (0, s.jsx)(
                  "div",
                  {
                      className: T.jZ,
                      style: t,
                      children:
                          i.length > 0
                              ? (0, s.jsxs)(l.Fragment, {
                                    children: [
                                        (0, s.jsx)("div", { className: T.Z4, children: x.intl.string(x.t["3JGJo2"]) }),
                                        (0, s.jsx)(m.e, {
                                            size: "sm",
                                            className: T.yB,
                                            children: i.map((e) =>
                                                (0, s.jsx)(
                                                    f.$,
                                                    {
                                                        variant: "secondary",
                                                        onClick: () => {
                                                            n(e);
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
                  r,
              )
            : null;
    };
    renderEmptyFavorite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, s.jsx)("div", {
            className: T.LA,
            children:
                null != e
                    ? (0, s.jsxs)("div", {
                          className: T.BA,
                          children: [
                              t ? (0, s.jsx)(p.G, { size: "xs", color: "currentColor", className: T.$2 }) : null,
                              (0, s.jsx)("div", { className: T.i6, children: e }),
                          ],
                      })
                    : (0, s.jsx)("div", { className: T.Hc }),
        });
    }
    renderEmptyFavorites() {
        return (0, s.jsx)(g.Ip, {
            className: T.Xv,
            fade: !0,
            children: (0, s.jsxs)("div", {
                className: T.Ep,
                children: [
                    this.renderEmptyFavorite(x.intl.string(x.t["3gyw4Z"]), !0),
                    this.renderEmptyFavorite(x.intl.string(x.t.yThUi4)),
                    this.renderEmptyFavorite(x.intl.string(x.t.MeP0SF)),
                    Array.from({ length: 15 }).map((e, t) =>
                        (0, s.jsx)(l.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(x.intl.string(x.t["5u99Xb"])),
                    Array.from({ length: 16 }).map((e, t) =>
                        (0, s.jsx)(l.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(x.intl.string(x.t.o6CLL4)),
                ],
            }),
        });
    }
    renderContent = (e, t, r) => {
        let { className: l, data: n, resultQuery: o, query: a, resultType: c } = this.props;
        return 0 === n.length && (o !== a || c === y.dD.TRENDING_GIFS)
            ? (0, s.jsx)(
                  E.f,
                  {
                      fade: !0,
                      className: i()(T.Xv, l),
                      sections: [D.length],
                      columns: e,
                      itemGutter: 12,
                      getItemKey: j,
                      getItemHeight: G,
                      renderItem: P,
                      chunkSize: 128,
                  },
                  o,
              )
            : (0, s.jsx)(
                  E.f,
                  {
                      ref: this._masonryRef,
                      fade: !0,
                      itemGutter: 12,
                      className: i()(T.Xv, l),
                      columns: e,
                      sections: [n.length, 0],
                      getItemKey: this.getItemKey,
                      getItemHeight: this.getItemHeight,
                      renderItem: this.renderItem,
                      getSectionHeight: this.getSectionHeight,
                      renderSection: this.renderSection,
                      onScroll: this.handleScroll,
                      chunkSize: 128,
                  },
                  `${o}-${c ?? ""}`,
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
        let { data: e, resultQuery: t, query: r, resultType: l } = this.props;
        return 0 === e.length && t === r && l !== y.dD.TRENDING_GIFS
            ? l === y.dD.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, s.jsx)(I.A, { message: x.intl.string(x.t["5dX4UM"]), className: T.wV })
            : (0, s.jsx)(
                  R.A,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, s.jsx)(S.A, { desiredItemWidth: 200, maxColumns: 8, children: this.renderContent }),
                  },
                  t,
              );
    }
}
function U() {
    let { renderWindow: e } = l.useContext(A.Ay),
        t = e.document,
        [r] = l.useState(
            () =>
                new c.R(
                    () => t.createElement("img"),
                    (e) => {
                        (e.onload = null), (e.src = "");
                    },
                ),
        ),
        [s] = l.useState(
            () =>
                new c.R(
                    () => {
                        let e = t.createElement("video");
                        return (
                            (e.className = T.nX),
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
    return { imagePool: r, videoPool: s };
}
let b = function (e) {
    let t = U();
    return (0, s.jsx)(k, { ...e, ...t });
};
