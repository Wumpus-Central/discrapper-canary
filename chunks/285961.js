r.d(t, { d5: () => V, Ay: () => H, uG: () => U });
var n = r(477900),
    s = r(582128),
    l = r(503698),
    i = r.n(l),
    a = r(435558),
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
    m = r(834730),
    p = r(825484),
    g = r(821609),
    f = r(27232),
    I = r(364522),
    E = r(92008),
    R = r(442433),
    _ = r(497685),
    y = r(25277),
    S = r(537652),
    v = r(267102),
    C = r(679164),
    A = r(439401),
    w = r(957565),
    x = r(998218),
    F = r(327143),
    T = r(652215),
    N = r(375708),
    G = r(801601);
let D = [d.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
    j = Array.from({ length: 16 }).map((e, t) => ({ id: `${t}`, height: Math.floor(100 * Math.random()) + 120 }));
function P(e) {
    return e.id ?? e.src;
}
function k(e, t) {
    let r = j[t];
    return null == r ? 0 : r.height;
}
function L(e, t, r, s) {
    if (!(e > 0))
        return null == j[t]
            ? null
            : (0, n.jsx)("div", { className: G.qf, style: { animationDelay: `${75 * t}ms`, ...r } }, s);
}
function b(e, t) {
    return e > 0 ? "" : (j[t]?.id ?? "");
}
function M(e) {
    return e === c.TL.VIDEO;
}
class U extends s.PureComponent {
    ref = null;
    _video = null;
    _image = null;
    _mounted = !0;
    constructor(e) {
        super(e);
        const { format: t, color: r, imagePool: n } = this.props;
        (this.state = { color: null == r ? o().sample(D) : r, loaded: !1 }),
            M(t) ||
                ((this._image = n.getElement()),
                (this._image.onload = () => this.setState({ loaded: !0 })),
                (this._image.src = e.src));
    }
    componentDidMount() {
        let {
            props: {
                format: e,
                src: t,
                coords: { width: r, height: n },
                videoPool: s,
            },
            ref: l,
        } = this;
        if (e !== c.TL.VIDEO || null == l) return;
        let i = s.getElement();
        (i.oncanplay = this.handleCanPlay),
            (i.src = t),
            (i.width = r),
            (i.height = n),
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
            { imagePool: r, videoPool: n } = this.props;
        null != e && ((this._image = null), r.poolElement(e)), null != t && ((this._video = null), n.poolElement(t));
    }
    handleCanPlay = () => {
        this._mounted && this.setState({ loaded: !0 });
    };
    handleClick = () => {
        let { onClick: e, item: t, index: r } = this.props;
        null != e && e(t, r);
    };
    handleContextMenu = (e) => {
        let { onContextMenu: t, item: r } = this.props;
        t?.(e, r);
    };
    renderGIF() {
        let e,
            t,
            {
                src: r,
                coords: { width: s, height: l },
            } = this.props,
            { loaded: i } = this.state;
        return i
            ? (0, n.jsx)("img", {
                  src:
                      ((t =
                          null != (e = x.A.toURLSafe(r)) &&
                          (C.BX(e) || C.i(e)) &&
                          e.pathname.toLowerCase().endsWith(".gif")),
                      null != e &&
                      (((C.BX(e) || C.i(e)) &&
                          (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))) ||
                          t)
                          ? (t && e.searchParams.set("format", "webp"),
                            e.searchParams.set("animated", "true"),
                            e.toString())
                          : r),
                  width: s,
                  height: l,
                  className: G.nX,
                  alt: "",
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: r, coords: s, focused: l, selected: i, "aria-label": a } = this.props,
            { color: o, loaded: u } = this.state;
        return (0, n.jsxs)(h.D, {
            tabIndex: -1,
            "aria-label": a,
            innerRef: (e) => {
                this.ref = e;
            },
            className: G.Ke,
            "data-focused": l,
            "data-selected": i,
            onClick: this.handleClick,
            onContextMenu: this.handleContextMenu,
            style: { backgroundColor: u ? void 0 : o, ...s },
            children: [M(r) ? null : this.renderGIF(), null != t ? t(e) : null],
        });
    }
}
class O extends s.PureComponent {
    _masonryRef = s.createRef();
    prevResultQuery = null;
    state = { focusedId: null };
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === T.dD.FAVORITES && ((0, _.Qh)(T.dD.FAVORITES), (0, _.H9)(t, T.dD.FAVORITES, { limit: null }));
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let r = t.getCoordsMap()[e];
        null != r &&
            (t.scrollIntoViewRect({ start: r.top - 10, end: r.top + r.height + 10 }), this.setState({ focusedId: e }));
    };
    selectItem(e, t) {
        let { onSelectGIF: r, resultType: n, data: s, resultQuery: l } = this.props;
        null != r && r(e),
            (0, _.g4)({
                type: n,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: s.length,
                totalResults: this.props.searchTotalResults,
                query: l,
                gifId: e.id,
            });
    }
    handleSelect = (e) => {
        let t,
            { data: r } = this.props,
            n = r.findIndex((t) => P(t) === e);
        -1 !== n && (t = r[n]), null != t && this.selectItem(t, n);
    };
    handleClickItem = (e, t) => {
        this.selectItem(e, t);
    };
    handleContextMenu = (e, t) => {
        w.p5 &&
            (0, R.L3)(e, async () => {
                let { default: e } = await r.e("22282").then(r.bind(r, 400017));
                return (r) => (0, n.jsx)(e, { ...r, link: t.url });
            });
    };
    handleScroll = () => {
        let { resultQuery: e } = this.props,
            { current: t } = this._masonryRef;
        if (null == t) return;
        let { scrollTop: r, scrollHeight: n } = t.getScrollerState();
        n - r <= 1220 && (e !== this.prevResultQuery && (0, _._E)(e), (this.prevResultQuery = e));
    };
    renderItem = (e, t, r, s) => {
        var l;
        let i, a;
        if (e > 0) return null;
        let { focusedId: o } = this.state,
            { selectedGIF: u } = this.props,
            c = this.props.data[t];
        if (null == c) return null;
        let d = null != u && P(u) === P(c);
        return (0, n.jsx)(
            U,
            {
                item: c,
                index: t,
                format: c.format,
                src: c.src,
                coords: r,
                onClick: this.handleClickItem,
                onContextMenu: this.handleContextMenu,
                renderExtras: () => (0, n.jsx)(A.A, { className: G.uJ, ...c }),
                focused: P(c) === o,
                imagePool: this.props.imagePool,
                videoPool: this.props.videoPool,
                selected: d,
                "aria-label":
                    ((l = c.src),
                    (i = l.split("/").pop()),
                    null == (a = i?.split(".")[0]) ||
                    "" === a ||
                    a.length < 4 ||
                    (a.length >= 8 && /^[0-9a-f]+$/i.test(a)) ||
                    (a.length > 12 && !/[-_ ]/.test(a) && /\d/.test(a)) ||
                    /^(giphy|tenor|\d+[wh]?|xs|sm|md|lg|xl)$/i.test(a)
                        ? N.intl.formatToPlainString(N.t["5iIGZI"], { index: t + 1 })
                        : a),
            },
            s,
        );
    };
    getItemHeight = (e, t, r) => {
        if (e > 0) return 0;
        let n = this.props.data[t];
        return null == n ? 0 : r * (n.height / n.width);
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
            ? (0, n.jsx)(
                  "div",
                  {
                      className: G.jZ,
                      style: t,
                      children:
                          i.length > 0
                              ? (0, n.jsxs)(s.Fragment, {
                                    children: [
                                        (0, n.jsx)(m.E, {
                                            variant: "text-md/medium",
                                            color: "text-feedback-warning",
                                            className: G.Z4,
                                            children: N.intl.string(N.t["3JGJo2"]),
                                        }),
                                        (0, n.jsx)(p.e, {
                                            size: "sm",
                                            className: G.yB,
                                            children: i.map((e) =>
                                                (0, n.jsx)(
                                                    g.$,
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
        return (0, n.jsx)("div", {
            className: G.LA,
            children:
                null != e
                    ? (0, n.jsxs)("div", {
                          className: G.BA,
                          children: [
                              t ? (0, n.jsx)(f.StarIcon, { size: "xs", color: "currentColor", className: G.$2 }) : null,
                              (0, n.jsx)("div", { className: G.i6, children: e }),
                          ],
                      })
                    : (0, n.jsx)("div", { className: G.Hc }),
        });
    }
    renderEmptyFavorites() {
        return (0, n.jsx)(I.Ip, {
            className: G.Xv,
            fade: !0,
            children: (0, n.jsxs)("div", {
                className: G.Ep,
                children: [
                    this.renderEmptyFavorite(N.intl.string(N.t["3gyw4Z"]), !0),
                    this.renderEmptyFavorite(N.intl.string(N.t.yThUi4)),
                    this.renderEmptyFavorite(N.intl.string(N.t.MeP0SF)),
                    Array.from({ length: 15 }).map((e, t) =>
                        (0, n.jsx)(s.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(N.intl.string(N.t["5u99Xb"])),
                    Array.from({ length: 16 }).map((e, t) =>
                        (0, n.jsx)(s.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(N.intl.string(N.t.o6CLL4)),
                ],
            }),
        });
    }
    renderContent = (e, t, r) => {
        let { className: s, data: l, resultQuery: a, query: o, resultType: u } = this.props;
        return 0 === l.length && (a !== o || u === T.dD.TRENDING_GIFS)
            ? (0, n.jsx)(
                  E.f,
                  {
                      fade: !0,
                      className: i()(G.Xv, s),
                      sections: [j.length],
                      columns: e,
                      itemGutter: 12,
                      getItemKey: b,
                      getItemHeight: k,
                      renderItem: L,
                      chunkSize: 128,
                  },
                  a,
              )
            : (0, n.jsx)(
                  E.f,
                  {
                      ref: this._masonryRef,
                      fade: !0,
                      itemGutter: 12,
                      className: i()(G.Xv, s),
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
        let { data: e, resultQuery: t, query: r, resultType: s } = this.props;
        if (0 === e.length && s !== T.dD.TRENDING_GIFS) {
            if (s === T.dD.FAVORITES)
                return 0 === r.length
                    ? this.renderEmptyFavorites()
                    : (0, n.jsx)(S.A, { message: N.intl.string(N.t.ZH4o6l), className: G.wV });
            else if (t === r) return (0, n.jsx)(S.A, { message: N.intl.string(N.t["5dX4UM"]), className: G.wV });
        }
        return (0, n.jsx)(
            y.A,
            {
                getItemGrid: this.getItemGrid,
                getCoordsMap: this.getCoordsMap,
                onFocus: this.handleFocus,
                onSelect: this.handleSelect,
                children: (0, n.jsx)(F.A, { desiredItemWidth: 200, maxColumns: 8, children: this.renderContent }),
            },
            t,
        );
    }
}
function V() {
    let { renderWindow: e } = s.useContext(v.Ay),
        t = e.document,
        [r] = s.useState(
            () =>
                new u(
                    () => t.createElement("img"),
                    (e) => {
                        (e.onload = null), (e.src = "");
                    },
                ),
        ),
        [n] = s.useState(
            () =>
                new u(
                    () => {
                        let e = t.createElement("video");
                        return (
                            (e.className = G.nX),
                            (e.autoplay = !0),
                            (e.loop = !0),
                            (e.muted = !0),
                            (e.preload = "auto"),
                            (e.controls = !1),
                            (e.tabIndex = -1),
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
    return { imagePool: r, videoPool: n };
}
let H = function (e) {
    let t = V();
    return (0, n.jsx)(O, { ...e, ...t });
};
