s.d(t, { d5: () => U, Ay: () => Q, uG: () => H });
var r = s(477900),
    n = s(582128),
    l = s(503698),
    i = s.n(l),
    a = s(435558),
    o = s.n(a);
s(321073);
class h {
    _elements;
    _createElement;
    _cleanElement;
    constructor(e, t) {
        ((this._elements = []), (this._createElement = e), (this._cleanElement = t));
    }
    getElement() {
        return 0 === this._elements.length ? this._createElement() : this._elements.pop();
    }
    poolElement(e) {
        (this._cleanElement(e), this._elements.push(e));
    }
    clearPool() {
        this._elements.length = 0;
    }
}
var u = s(803805),
    d = s(661531),
    c = s(939249),
    m = s(834730),
    p = s(825484),
    g = s(821609),
    f = s(27232),
    R = s(364522),
    y = s(92008),
    C = s(442433),
    I = s(497685),
    x = s(25277),
    E = s(537652),
    _ = s(267102),
    A = s(679164),
    S = s(439401),
    v = s(957565),
    w = s(998218),
    N = s(327143),
    F = s(652215),
    D = s(375708),
    T = s(801601);
let j = [d.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
    G = Array.from({ length: 16 }).map((e, t) => ({ id: `${t}`, height: Math.floor(100 * Math.random()) + 120 }));
function P(e) {
    return e.id ?? e.src;
}
function M(e, t) {
    let s = G[t];
    return null == s ? 0 : s.height;
}
function k(e, t, s, n) {
    if (!(e > 0))
        return null == G[t]
            ? null
            : (0, r.jsx)("div", { className: T.qf, style: { animationDelay: `${75 * t}ms`, ...s } }, n);
}
function O(e, t) {
    return e > 0 ? "" : (G[t]?.id ?? "");
}
function L(e) {
    return e === u.TL.VIDEO;
}
function b(e) {
    let t = w.A.toURLSafe(e, document.baseURI),
        s = null != t && (A.BX(t) || A.i(t)) && t.pathname.toLowerCase().endsWith(".gif");
    return null != t &&
        (((A.BX(t) || A.i(t)) &&
            (t.pathname.toLowerCase().endsWith(".webp") || t.pathname.toLowerCase().endsWith(".avif"))) ||
            s)
        ? (s && t.searchParams.set("format", "webp"), t.searchParams.set("animated", "true"), t.toString())
        : e;
}
class H extends n.PureComponent {
    ref = null;
    _video = null;
    _image = null;
    _mounted = !0;
    constructor(e) {
        super(e);
        const { format: t, color: s, imagePool: r } = this.props;
        ((this.state = { color: null == s ? o().sample(j) : s, loaded: !1 }),
            L(t) ||
                ((this._image = r.getElement()),
                (this._image.onload = () => this.setState({ loaded: !0 })),
                (this._image.src = b(e.src))));
    }
    componentDidMount() {
        let {
            props: {
                format: e,
                src: t,
                coords: { width: s, height: r },
                videoPool: n,
            },
            ref: l,
        } = this;
        if (e !== u.TL.VIDEO || null == l) return;
        let i = n.getElement();
        ((i.oncanplay = this.handleCanPlay),
            (i.src = t),
            (i.width = s),
            (i.height = r),
            l.appendChild(i),
            (this._video = i));
    }
    componentDidUpdate(e) {
        let { width: t, height: s } = this.props.coords;
        null != this._video &&
            (e.coords.width !== t || e.coords.height !== s) &&
            ((this._video.width = t), (this._video.height = s));
    }
    componentWillUnmount() {
        this._mounted = !1;
        let { _image: e, _video: t } = this,
            { imagePool: s, videoPool: r } = this.props;
        (null != e && ((this._image = null), s.poolElement(e)), null != t && ((this._video = null), r.poolElement(t)));
    }
    handleCanPlay = () => {
        this._mounted && this.setState({ loaded: !0 });
    };
    handleClick = (e) => {
        let { onClick: t, item: s, index: r } = this.props;
        null != t && t(s, r, { shiftKey: e.shiftKey });
    };
    handleContextMenu = (e) => {
        let { onContextMenu: t, item: s } = this.props;
        t?.(e, s);
    };
    renderGIF() {
        let {
                src: e,
                coords: { width: t, height: s },
            } = this.props,
            { loaded: n } = this.state;
        return n ? (0, r.jsx)("img", { src: b(e), width: t, height: s, className: T.nX, alt: "" }) : null;
    }
    render() {
        let { item: e, renderExtras: t, format: s, coords: n, focused: l, selected: i, "aria-label": a } = this.props,
            { color: o, loaded: h } = this.state;
        return (0, r.jsxs)(c.D, {
            tabIndex: -1,
            "aria-label": a,
            innerRef: (e) => {
                this.ref = e;
            },
            className: T.Ke,
            "data-focused": l,
            "data-selected": i,
            onClick: this.handleClick,
            onContextMenu: this.handleContextMenu,
            style: { backgroundColor: h ? void 0 : o, ...n },
            children: [L(s) ? null : this.renderGIF(), null != t ? t(e) : null],
        });
    }
}
class W extends n.PureComponent {
    _masonryRef = n.createRef();
    _footerContent = null;
    prevResultQuery = null;
    state = { focusedId: null, footerHeight: 180 };
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        (e === F.dD.FAVORITES && ((0, I.Qh)(F.dD.FAVORITES), (0, I.H9)(t, F.dD.FAVORITES, { limit: null })),
            this.measureFooter());
    }
    componentDidUpdate() {
        this.measureFooter();
    }
    setFooterContent = (e) => {
        ((this._footerContent = e), this.measureFooter());
    };
    measureFooter = () => {
        let e = this._footerContent;
        if (null == e) return;
        let t = e.offsetHeight;
        t > 0 && t !== this.state.footerHeight && this.setState({ footerHeight: t });
    };
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let s = t.getCoordsMap()[e];
        null != s &&
            (t.scrollIntoViewRect({ start: s.top - 10, end: s.top + s.height + 10 }), this.setState({ focusedId: e }));
    };
    selectItem(e, t, s) {
        let { onSelectGIF: r, resultType: n, data: l, resultQuery: i } = this.props;
        (null != r && r(e, s),
            (0, I.g4)({
                type: n,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: l.length,
                totalResults: this.props.searchTotalResults,
                query: i,
                gifId: e.id,
            }));
    }
    handleSelect = (e, t) => {
        let s,
            { data: r } = this.props,
            n = r.findIndex((t) => P(t) === e);
        (-1 !== n && (s = r[n]), null != s && this.selectItem(s, n, t));
    };
    handleClickItem = (e, t, s) => {
        this.selectItem(e, t, s);
    };
    handleContextMenu = (e, t) => {
        v.p5 &&
            (0, C.L3)(e, async () => {
                let { default: e } = await s.e("22282").then(s.bind(s, 400017));
                return (s) => (0, r.jsx)(e, { ...s, link: t.url });
            });
    };
    handleScroll = () => {
        let { resultQuery: e } = this.props,
            { current: t } = this._masonryRef;
        if (null == t) return;
        let { scrollTop: s, scrollHeight: r } = t.getScrollerState();
        r - s <= 1180 && (e !== this.prevResultQuery && (0, I._E)(e), (this.prevResultQuery = e));
    };
    renderItem = (e, t, s, n) => {
        var l;
        let i, a;
        if (e > 0) return null;
        let { focusedId: o } = this.state,
            { selectedGIF: h } = this.props,
            u = this.props.data[t];
        if (null == u) return null;
        let d = null != h && P(h) === P(u);
        return (0, r.jsx)(
            H,
            {
                item: u,
                index: t,
                format: u.format,
                src: u.src,
                coords: s,
                onClick: this.handleClickItem,
                onContextMenu: this.handleContextMenu,
                renderExtras: () => (0, r.jsx)(S.A, { className: T.uJ, ...u }),
                focused: P(u) === o,
                imagePool: this.props.imagePool,
                videoPool: this.props.videoPool,
                selected: d,
                "aria-label":
                    ((l = u.src),
                    (i = l.split("/").pop()),
                    null == (a = i?.split(".")[0]) ||
                    "" === a ||
                    a.length < 4 ||
                    (a.length >= 8 && /^[0-9a-f]+$/i.test(a)) ||
                    (a.length > 12 && !/[-_ ]/.test(a) && /\d/.test(a)) ||
                    /^(giphy|tenor|\d+[wh]?|xs|sm|md|lg|xl)$/i.test(a)
                        ? D.intl.formatToPlainString(D.t["5iIGZI"], { index: t + 1 })
                        : a),
            },
            n,
        );
    };
    getItemHeight = (e, t, s) => {
        if (e > 0) return 0;
        let r = this.props.data[t];
        return null == r ? 0 : s * (r.height / r.width);
    };
    getItemKey = (e, t) => {
        if (e > 0) return null;
        let s = this.props.data[t];
        return null != s ? (s.id ?? s.src) : null;
    };
    getSectionHeight = (e) => (1 === e ? this.state.footerHeight : 0);
    renderSection = (e, t, s) => {
        let { onSelectSuggestion: n, suggestions: l } = this.props;
        return 1 === e
            ? (0, r.jsx)(
                  "div",
                  {
                      className: T.jZ,
                      style: t,
                      children: (0, r.jsxs)("div", {
                          ref: this.setFooterContent,
                          className: T.Xe,
                          children: [
                              (0, r.jsx)(m.E, {
                                  variant: "text-md/medium",
                                  color: "text-feedback-warning",
                                  className: T.Z4,
                                  children: D.intl.string(D.t["3JGJo2"]),
                              }),
                              (0, r.jsx)(p.e, {
                                  size: "sm",
                                  children: l.map((e) =>
                                      (0, r.jsx)(
                                          g.$,
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
                      }),
                  },
                  s,
              )
            : null;
    };
    renderEmptyFavorite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, r.jsx)("div", {
            className: T.LA,
            children:
                null != e
                    ? (0, r.jsxs)("div", {
                          className: T.BA,
                          children: [
                              t ? (0, r.jsx)(f.StarIcon, { size: "xs", color: "currentColor", className: T.$2 }) : null,
                              (0, r.jsx)("div", { className: T.i6, children: e }),
                          ],
                      })
                    : (0, r.jsx)("div", { className: T.Hc }),
        });
    }
    renderEmptyFavorites() {
        return (0, r.jsx)(R.Ip, {
            className: T.Xv,
            fade: !0,
            children: (0, r.jsxs)("div", {
                className: T.Ep,
                children: [
                    this.renderEmptyFavorite(D.intl.string(D.t["3gyw4Z"]), !0),
                    this.renderEmptyFavorite(D.intl.string(D.t.yThUi4)),
                    this.renderEmptyFavorite(D.intl.string(D.t.MeP0SF)),
                    Array.from({ length: 15 }).map((e, t) =>
                        (0, r.jsx)(n.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(D.intl.string(D.t["5u99Xb"])),
                    Array.from({ length: 16 }).map((e, t) =>
                        (0, r.jsx)(n.Fragment, { children: this.renderEmptyFavorite() }, t),
                    ),
                    this.renderEmptyFavorite(D.intl.string(D.t.o6CLL4)),
                ],
            }),
        });
    }
    renderContent = (e, t, s) => {
        let { className: n, data: l, resultQuery: a, query: o, resultType: h, suggestions: u } = this.props,
            d = u.length > 0;
        return 0 === l.length && (a !== o || h === F.dD.TRENDING_GIFS)
            ? (0, r.jsx)(
                  y.f,
                  {
                      fade: !0,
                      className: i()(T.Xv, n),
                      sections: [G.length],
                      columns: e,
                      itemGutter: 12,
                      getItemKey: O,
                      getItemHeight: M,
                      renderItem: k,
                      chunkSize: 128,
                  },
                  a,
              )
            : (0, r.jsx)(
                  y.f,
                  {
                      ref: this._masonryRef,
                      fade: !0,
                      itemGutter: 12,
                      className: i()(T.Xv, n),
                      columns: e,
                      sections: d ? [l.length, 0] : [l.length],
                      getItemKey: this.getItemKey,
                      getItemHeight: this.getItemHeight,
                      renderItem: this.renderItem,
                      getSectionHeight: this.getSectionHeight,
                      renderSection: this.renderSection,
                      onScroll: this.handleScroll,
                      chunkSize: 128,
                  },
                  `${a}-${h ?? ""}`,
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
        let { data: e, resultQuery: t, query: s, resultType: n } = this.props;
        if (0 === e.length && n !== F.dD.TRENDING_GIFS) {
            if (n === F.dD.FAVORITES)
                return 0 === s.length
                    ? this.renderEmptyFavorites()
                    : (0, r.jsx)(E.A, { message: D.intl.string(D.t.ZH4o6l), className: T.wV });
            else if (t === s) return (0, r.jsx)(E.A, { message: D.intl.string(D.t["5dX4UM"]), className: T.wV });
        }
        return (0, r.jsx)(
            x.A,
            {
                getItemGrid: this.getItemGrid,
                getCoordsMap: this.getCoordsMap,
                onFocus: this.handleFocus,
                onSelect: this.handleSelect,
                children: (0, r.jsx)(N.A, { desiredItemWidth: 200, maxColumns: 8, children: this.renderContent }),
            },
            t,
        );
    }
}
function U() {
    let { renderWindow: e } = n.useContext(_.Ay),
        t = e.document,
        [s] = n.useState(
            () =>
                new h(
                    () => t.createElement("img"),
                    (e) => {
                        ((e.onload = null), (e.src = ""));
                    },
                ),
        ),
        [r] = n.useState(
            () =>
                new h(
                    () => {
                        let e = t.createElement("video");
                        return (
                            (e.className = T.nX),
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
                        ((e.src = ""), (e.oncanplay = null));
                        let { parentNode: t } = e;
                        null != t && t.removeChild(e);
                    },
                ),
        );
    return { imagePool: s, videoPool: r };
}
let Q = function (e) {
    let t = U();
    return (0, r.jsx)(W, { ...e, ...t });
};
