r.d(t, { d5: () => U, Ay: () => M, uG: () => b });
var s = r(627968),
    n = r(64700),
    l = r(503698),
    i = r.n(l),
    a = r(735438),
    o = r.n(a);
r(321073);
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
var c = r(803805),
    d = r(661531),
    h = r(939249),
    m = r(825484),
    p = r(821609),
    g = r(27232),
    f = r(364522),
    I = r(92008),
    E = r(497685),
    R = r(25277),
    _ = r(537652),
    y = r(267102),
    S = r(202803),
    v = r(439401),
    C = r(998218),
    A = r(327143),
    w = r(652215),
    F = r(375708),
    x = r(931102);
let G = [d.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
    N = Array.from({ length: 16 }).map((e, t) => ({ id: `${t}`, height: Math.floor(100 * Math.random()) + 120 }));
function T(e) {
    return e.id ?? e.src;
}
function D(e, t) {
    let r = N[t];
    return null == r ? 0 : r.height;
}
function j(e, t, r, n) {
    if (!(e > 0))
        return null == N[t]
            ? null
            : (0, s.jsx)("div", { className: x.qf, style: { animationDelay: `${75 * t}ms`, ...r } }, n);
}
function P(e, t) {
    return e > 0 ? "" : (N[t]?.id ?? "");
}
function k(e) {
    return e === c.TL.VIDEO;
}
class b extends n.PureComponent {
    ref = null;
    _video = null;
    _image = null;
    _mounted = !0;
    constructor(e) {
        super(e);
        const { format: t, color: r, imagePool: s } = this.props;
        (this.state = { color: null == r ? o().sample(G) : r, loaded: !1 }),
            k(t) ||
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
                videoPool: n,
            },
            ref: l,
        } = this;
        if (e !== c.TL.VIDEO || null == l) return;
        let i = n.getElement();
        (i.oncanplay = this.handleCanPlay),
            (i.src = t),
            (i.width = r),
            (i.height = s),
            l.appendChild(i),
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
                coords: { width: n, height: l },
            } = this.props,
            { loaded: i } = this.state;
        return i
            ? (0, s.jsx)("img", {
                  src:
                      ((t =
                          null != (e = C.A.toURLSafe(r)) &&
                          ((0, S.BX)(e) || (0, S.fr)(e)) &&
                          e.pathname.toLowerCase().endsWith(".gif")),
                      null != e &&
                      ((((0, S.BX)(e) || (0, S.fr)(e)) &&
                          (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))) ||
                          t)
                          ? (t && e.searchParams.set("format", "webp"),
                            e.searchParams.set("animated", "true"),
                            e.toString())
                          : r),
                  width: n,
                  height: l,
                  className: x.nX,
                  alt: "",
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: r, coords: n, focused: l, selected: i } = this.props,
            { color: a, loaded: o } = this.state;
        return (0, s.jsxs)(h.D, {
            tabIndex: -1,
            innerRef: (e) => {
                this.ref = e;
            },
            className: x.Ke,
            "data-focused": l,
            "data-selected": i,
            onClick: this.handleClick,
            style: { backgroundColor: o ? void 0 : a, ...n },
            children: [k(r) ? null : this.renderGIF(), null != t ? t(e) : null],
        });
    }
}
class L extends n.PureComponent {
    _masonryRef = n.createRef();
    prevResultQuery = null;
    state = { focusedId: null };
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === w.dD.FAVORITES && ((0, E.Qh)(w.dD.FAVORITES), (0, E.H9)(t, w.dD.FAVORITES, { limit: null }));
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let r = t.getCoordsMap()[e];
        null != r &&
            (t.scrollIntoViewRect({ start: r.top - 10, end: r.top + r.height + 10 }), this.setState({ focusedId: e }));
    };
    selectItem(e, t) {
        let { onSelectGIF: r, resultType: s, data: n, resultQuery: l } = this.props;
        null != r && r(e),
            (0, E.g4)({
                type: s,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: n.length,
                totalResults: this.props.searchTotalResults,
                query: l,
                gifId: e.id,
            });
    }
    handleSelect = (e) => {
        let t,
            { data: r } = this.props,
            s = r.findIndex((t) => T(t) === e);
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
        s - r <= 1220 && (e !== this.prevResultQuery && (0, E._E)(e), (this.prevResultQuery = e));
    };
    renderItem = (e, t, r, n) => {
        if (e > 0) return null;
        let { focusedId: l } = this.state,
            { selectedGIF: i } = this.props,
            a = this.props.data[t];
        if (null == a) return null;
        let o = null != i && T(i) === T(a);
        return (0, s.jsx)(
            b,
            {
                item: a,
                index: t,
                format: a.format,
                src: a.src,
                coords: r,
                onClick: this.handleClickItem,
                renderExtras: () => (0, s.jsx)(v.A, { className: x.uJ, ...a }),
                focused: T(a) === l,
                imagePool: this.props.imagePool,
                videoPool: this.props.videoPool,
                selected: o,
            },
            n,
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
        let { onSelectSuggestion: l, suggestions: i } = this.props;
        return 1 === e
            ? (0, s.jsx)(
                  "div",
                  {
                      className: x.jZ,
                      style: t,
                      children:
                          i.length > 0
                              ? (0, s.jsxs)(n.Fragment, {
                                    children: [
                                        (0, s.jsx)("div", { className: x.Z4, children: F.intl.string(F.t["3JGJo2"]) }),
                                        (0, s.jsx)(m.e, {
                                            size: "sm",
                                            className: x.yB,
                                            children: i.map((e) =>
                                                (0, s.jsx)(
                                                    p.$,
                                                    {
                                                        variant: "secondary",
                                                        onClick: () => {
                                                            l(e);
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
            className: x.LA,
            children:
                null != e
                    ? (0, s.jsxs)("div", {
                          className: x.BA,
                          children: [
                              t ? (0, s.jsx)(g.G, { size: "xs", color: "currentColor", className: x.$2 }) : null,
                              (0, s.jsx)("div", { className: x.i6, children: e }),
                          ],
                      })
                    : (0, s.jsx)("div", { className: x.Hc }),
        });
    }
    renderEmptyFavorites() {
        return (0, s.jsx)(f.Ip, {
            className: x.Xv,
            fade: !0,
            children: (0, s.jsxs)("div", {
                className: x.Ep,
                children: [
                    this.renderEmptyFavorite(F.intl.string(F.t["3gyw4Z"]), !0),
                    this.renderEmptyFavorite(F.intl.string(F.t.yThUi4)),
                    this.renderEmptyFavorite(F.intl.string(F.t.MeP0SF)),
                    Array.from({ length: 15 }).map((e, t) =>
                        (0, s.jsx)(n.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(F.intl.string(F.t["5u99Xb"])),
                    Array.from({ length: 16 }).map((e, t) =>
                        (0, s.jsx)(n.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(F.intl.string(F.t.o6CLL4)),
                ],
            }),
        });
    }
    renderContent = (e, t, r) => {
        let { className: n, data: l, resultQuery: a, query: o, resultType: u } = this.props;
        return 0 === l.length && (a !== o || u === w.dD.TRENDING_GIFS)
            ? (0, s.jsx)(
                  I.f,
                  {
                      fade: !0,
                      className: i()(x.Xv, n),
                      sections: [N.length],
                      columns: e,
                      itemGutter: 12,
                      getItemKey: P,
                      getItemHeight: D,
                      renderItem: j,
                      chunkSize: 128,
                  },
                  a,
              )
            : (0, s.jsx)(
                  I.f,
                  {
                      ref: this._masonryRef,
                      fade: !0,
                      itemGutter: 12,
                      className: i()(x.Xv, n),
                      columns: e,
                      sections: [l.length, 0],
                      getItemKey: this.getItemKey,
                      getItemHeight: this.getItemHeight,
                      renderItem: this.renderItem,
                      getSectionHeight: this.getSectionHeight,
                      renderSection: this.renderSection,
                      onScroll: this.handleScroll,
                      chunkSize: 128,
                  },
                  `${a}-${u ?? ""}`,
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
        let { data: e, resultQuery: t, query: r, resultType: n } = this.props;
        return 0 === e.length && t === r && n !== w.dD.TRENDING_GIFS
            ? n === w.dD.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, s.jsx)(_.A, { message: F.intl.string(F.t["5dX4UM"]), className: x.wV })
            : (0, s.jsx)(
                  R.A,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, s.jsx)(A.A, { desiredItemWidth: 200, maxColumns: 8, children: this.renderContent }),
                  },
                  t,
              );
    }
}
function U() {
    let { renderWindow: e } = n.useContext(y.Ay),
        t = e.document,
        [r] = n.useState(
            () =>
                new u(
                    () => t.createElement("img"),
                    (e) => {
                        (e.onload = null), (e.src = "");
                    },
                ),
        ),
        [s] = n.useState(
            () =>
                new u(
                    () => {
                        let e = t.createElement("video");
                        return (
                            (e.className = x.nX),
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
let M = function (e) {
    let t = U();
    return (0, s.jsx)(L, { ...e, ...t });
};
