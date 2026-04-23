n.d(t, { A: () => K });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(621466),
    d = n(311907),
    c = n(97808),
    u = n(778712),
    m = n(834730),
    g = n(177953),
    h = n(783878),
    x = n(534514),
    _ = n(404778),
    p = n(289873),
    A = n(396478),
    E = n(821609),
    f = n(599319),
    j = n(187322),
    N = n(137130),
    I = n(442433),
    C = n(974544),
    b = n(928039),
    v = n(544028),
    S = n(411153),
    T = n(427157),
    y = n(734057),
    R = n(71393),
    L = n(351906),
    D = n(287809),
    O = n(403362),
    G = n(427262),
    M = n(555337),
    k = n(276373),
    U = n(523599),
    w = n(438407),
    P = n(258665),
    B = n(652215),
    F = n(985018),
    H = n(651458),
    V = n(515810);
let z = l.forwardRef((e, t) => {
    let { onHeaderClick: l, guildId: s, guild: r, ...a } = e;
    return null == s
        ? null
        : (0, i.jsx)(P.A, {
              ref: t,
              ...a,
              guildId: s,
              guild: r,
              onHeaderClick: () => {
                  let { log: e } = a;
                  l?.(e);
              },
              onUserContextMenu: (e) => {
                  let { log: t } = a,
                      { user: l } = t;
                  null != l &&
                      null != s &&
                      (0, I.L3)(e, async () => {
                          let { default: e } = await n.e("76926").then(n.bind(n, 422189));
                          return (t) => (0, i.jsx)(e, { ...t, guildId: s, user: l });
                      });
              },
              onChannelContextMenu: (e) => {
                  let { log: t } = a,
                      l = R.A.getGuild(s);
                  null != t.options.channel &&
                      "string" != typeof t.options.channel &&
                      null != l &&
                      (0, I.L3)(e, async () => {
                          let { default: e } = await n.e("23440").then(n.bind(n, 194195));
                          return (n) =>
                              null != t.options.channel ? (0, i.jsx)(e, { ...n, channel: t.options.channel }) : null;
                      });
              },
              onTargetContextMenu: (e) => {
                  let { log: t } = a;
                  switch (t.targetType) {
                      case B.GaG.CHANNEL:
                      case B.GaG.CHANNEL_OVERWRITE:
                          let l = y.A.getChannel(t.targetId),
                              r = R.A.getGuild(s);
                          if (null != l && null != r)
                              return (0, I.L3)(e, async () => {
                                  let { default: e } = await n.e("23440").then(n.bind(n, 194195));
                                  return (t) => (0, i.jsx)(e, { ...t, channel: l });
                              });
                          return (0, I.L3)(e, async () => {
                              let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                              return (n) => (0, i.jsx)(e, { ...n, id: t.targetId, label: F.intl.string(F.t.rCazna) });
                          });
                      case B.GaG.USER:
                          let o = D.default.getUser(t.targetId);
                          if (null != o && null != s)
                              return (0, I.L3)(e, async () => {
                                  let { default: e } = await n.e("76926").then(n.bind(n, 422189));
                                  return (t) => (0, i.jsx)(e, { ...t, guildId: s, user: o });
                              });
                  }
                  return null;
              },
          });
});
function W(e) {
    let {
            logs: t,
            guildId: n,
            guild: s,
            expandedId: r,
            lastExpandedId: o,
            scroller: d,
            setExpandedRef: c,
            setLastExpandedRef: u,
            onHeaderClick: m,
            onContentClick: g,
        } = e,
        h = l.useRef(d);
    l.useEffect(() => {
        h.current = d;
    }, [d]);
    let x = (0, b.A)("audit-log", h);
    return (0, i.jsx)(a.hD, {
        navigator: x,
        children: (0, i.jsx)(a.PR, {
            children: (e) => {
                let { ref: l, ...a } = e;
                return (0, i.jsx)("div", {
                    ref: l,
                    ...a,
                    className: H.p_,
                    children: t.map((e) => {
                        let t = r === e.id,
                            l = o === e.id,
                            a = t ? c : l ? u : null;
                        return (0, i.jsx)(
                            z,
                            {
                                guildId: n,
                                guild: s,
                                ref: (e) => {
                                    a?.(e);
                                },
                                className: H.nM,
                                onHeaderClick: m,
                                onContentClick: g,
                                log: e,
                                expanded: t,
                            },
                            e.id,
                        );
                    }),
                });
            },
        }),
    });
}
z.displayName = "AuditLogClickWrap";
class Y extends l.PureComponent {
    _clickedInside = !1;
    _scrollerRef = null;
    _expandedRef = null;
    _lastExpandedRef = null;
    _prevRects = this.getRects();
    _contentRef = l.createRef();
    state = { expandedId: null, lastExpandedId: null, actionFilterQuery: "" };
    componentDidMount() {
        (0, N.Wy)(this.props.guildId), document.addEventListener("click", this.handleOutsideClick);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.handleOutsideClick);
    }
    componentDidUpdate(e, t) {
        this.state.expandedId !== t.expandedId && this.fixScroll(),
            !this.props.showLoadMore &&
                this.props.logs.length !== e.logs.length &&
                null != this._scrollerRef &&
                this.isScrollerAtBottom() &&
                (0, N.jS)(this.props.guildId, !0);
    }
    isScrollerAtBottom() {
        return this._scrollerRef?.isScrolledToBottom() || !1;
    }
    fixScroll() {
        let e = this._scrollerRef;
        if (null == e) return;
        let t = this.getRects(),
            n = this._prevRects;
        if (null == t.expanded || null == t.lastExpanded || null == n.expanded || t.expanded.top < t.lastExpanded.top)
            return;
        let i = n.expanded.height - t.lastExpanded.height,
            l = e.getScrollerState().scrollTop - i;
        e.scrollTo({ to: l });
    }
    getRects() {
        let e = { lastExpanded: null, expanded: null };
        if (null != this._lastExpandedRef) {
            let t = this._lastExpandedRef;
            (0, o.vq)(t) && (e.lastExpanded = t.getBoundingClientRect());
        }
        if (null != this._expandedRef) {
            let t = this._expandedRef;
            (0, o.vq)(t) && (e.expanded = t.getBoundingClientRect());
        }
        return e;
    }
    formatActionOption = (e) => {
        let t = (0, S.pq)(e.value),
            n = (0, S.Ag)(e.value);
        return {
            id: e.value,
            value: e.value,
            label: e.label,
            leading: (0, i.jsx)(w.H, { themeOverride: null, actionType: t, targetType: n, action: e.value }),
        };
    };
    formatUserOption = (e) => {
        if (!(e.user instanceof T.A))
            return {
                id: e.value,
                value: e.value,
                label: e.label,
                leading: (0, i.jsx)(g.n, { size: "custom", color: "currentColor", width: 30, height: 30 }),
            };
        {
            let t = e.user;
            return {
                id: t.id,
                value: t.id,
                label: G.Ay.getUserTag(t, { mode: "username" }),
                leading: (0, i.jsx)(c.eu, {
                    size: u._3.SIZE_24,
                    src: t.getAvatarURL(this.props.guildId, 32),
                    "aria-label": t.username,
                    className: H.my,
                }),
                trailing: t.hasUniqueUsername()
                    ? void 0
                    : (0, i.jsxs)(m.E, {
                          variant: "text-xs/normal",
                          className: H.D2,
                          children: ["#", t.discriminator],
                      }),
            };
        }
    };
    renderHeaderDropdowns = () => {
        let { actionFilter: e, hide: t, userIdFilter: n, moderators: l } = this.props;
        if (t) return null;
        let s = k.ACTION_FILTER_ITEMS(),
            r =
                s.find((t) => {
                    let { value: n } = t;
                    return e === n;
                }) ?? s[0],
            a = { label: F.intl.string(F.t.ZRFdsL), valueLabel: F.intl.string(F.t.an9Ry3), value: null },
            o = [a, ...l].map((e) => (e instanceof T.A ? { label: e.username, value: e.id, user: e } : e)),
            d =
                o.find((e) => {
                    let { value: t } = e;
                    return t === n;
                }) ?? a;
        return (0, i.jsxs)("div", {
            className: H.SO,
            children: [
                (0, i.jsx)(h.Z, {
                    options: o,
                    formatOption: this.formatUserOption,
                    value: d.value,
                    onSelectionChange: this.handleFilterUserChange,
                    label: F.intl.string(F.t["hxnY/q"]),
                    placeholder: F.intl.string(F.t.pYHobK),
                    selectionMode: "single",
                }),
                (0, i.jsx)(h.Z, {
                    placeholder: F.intl.string(F.t.I288Zx),
                    label: F.intl.string(F.t.rautds),
                    options: s,
                    formatOption: this.formatActionOption,
                    value: r.value,
                    onSelectionChange: this.handleFilterActionChange,
                    selectionMode: "single",
                }),
            ],
        });
    };
    renderHeader() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: H.P_,
                    children: [
                        (0, i.jsx)(x.D, { variant: "heading-lg/semibold", children: F.intl.string(F.t.SPWLyT) }),
                        this.renderHeaderDropdowns(),
                    ],
                }),
                (0, i.jsx)(_.c, { className: H.yF }),
            ],
        });
    }
    renderSpinner() {
        return (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            {
                logs: l,
                theme: s,
                hide: r,
                isInitialLoading: a,
                isLoading: o,
                hasError: d,
                guildId: c,
                guild: u,
            } = this.props;
        if (r) return (0, i.jsx)(C.A, {});
        if (o || a) return this.renderSpinner();
        if (0 === l.length) {
            let e = d ? F.intl.string(F.t.tzkaD7) : F.intl.string(F.t.lNuYhh),
                t = d ? F.intl.string(F.t.Ww5Tjy) : F.intl.string(F.t["RHhk+P"]);
            return (0, i.jsxs)(A.pp, {
                theme: s,
                className: H.Ie,
                children: [
                    (0, i.jsx)(A.G8, { darkSrc: n(673586), lightSrc: n(470954), width: 272, height: 130 }),
                    (0, i.jsx)(A.SG, { note: e, style: { maxWidth: 300 }, children: t }),
                ],
            });
        }
        return (0, i.jsx)(W, {
            logs: l,
            guildId: c,
            guild: u,
            expandedId: e,
            lastExpandedId: t,
            setExpandedRef: this.handleSetExpandedRef,
            setLastExpandedRef: this.handleSetLastExpandedRef,
            onHeaderClick: this.handleHeaderClick,
            onContentClick: this.handleContentClick,
            scroller: this._scrollerRef,
        });
    }
    renderLoadMore = () => {
        let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
        if (e && t && !n)
            return (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: H.UX,
                children: (0, i.jsx)(E.$, {
                    variant: "secondary",
                    text: F.intl.string(F.t["Q/LSXp"]),
                    onClick: this.handleFetchNextPage,
                }),
            });
    };
    render() {
        let { isLoadingNextPage: e, hide: t, isLoading: n } = this.props;
        return (0, i.jsx)("div", {
            className: V.customColumn,
            children: (0, i.jsx)("div", {
                className: V.customContainer,
                children: (0, i.jsx)(f.Gt, {
                    className: r()(V.customScroller, H.XG),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, i.jsx)("div", {
                        className: H.Qs,
                        ref: this._contentRef,
                        children: (0, i.jsxs)(j.xp, {
                            containerRef: this._contentRef,
                            children: [
                                this.renderHeader(),
                                this.renderContent(),
                                this.renderLoadMore(),
                                !e || t || n ? null : this.renderSpinner(),
                            ],
                        }),
                    }),
                }),
            }),
        });
    }
    handleFilterActionChange = (e) => {
        (0, N.gN)(e, this.props.guildId);
    };
    handleFilterUserChange = (e) => {
        (0, N.ER)(e, this.props.guildId);
    };
    handleHeaderClick = (e) => {
        let { expandedId: t } = this.state;
        t !== e.id
            ? ((this._clickedInside = !0),
              this.setState({ expandedId: e.id, lastExpandedId: t }),
              (this._prevRects = this.getRects()))
            : ((this._expandedRef = null),
              (this._lastExpandedRef = null),
              null != t && (this._prevRects = this.getRects()),
              this.setState({ expandedId: null, lastExpandedId: null }));
    };
    handleOutsideClick = () => {
        null == this.state.expandedId || this._clickedInside
            ? null != this.state.expandedId && (this._clickedInside = !1)
            : ((this._expandedRef = null),
              (this._lastExpandedRef = null),
              this.setState({ expandedId: null, lastExpandedId: null }),
              (this._prevRects = this.getRects()));
    };
    handleContentClick = (e) => {
        (this._clickedInside = !0), e.stopPropagation();
    };
    handleSetScrollerRef = (e) => {
        this._scrollerRef = e;
    };
    handleOnScroll = () => {
        this.isScrollerAtBottom() && this.handleFetchNextPage();
    };
    handleFetchNextPage = () => {
        (0, N.jS)(this.props.guildId);
    };
    handleActionFilterQueryChange = (e) => {
        this.setState({ actionFilterQuery: e });
    };
    handleActionFilterQueryClear = () => {
        this.setState({ actionFilterQuery: "" });
    };
    handleSetExpandedRef = (e) => {
        this._expandedRef = e;
    };
    handleSetLastExpandedRef = (e) => {
        this._lastExpandedRef = e;
    };
}
let K = d.Ay.connectStores([U.A, M.A, R.A, v.A, L.A, D.default], () => {
    let e = M.A.getGuildId(),
        t = R.A.getGuild(e),
        n = U.A.logs;
    return {
        guildId: e,
        guild: t,
        moderators: U.A.userIds.map((e) => D.default.getUser(e)).filter(O.Vq),
        isInitialLoading: U.A.isInitialLoading,
        isLoading: U.A.isLoading,
        isLoadingNextPage: U.A.isLoadingNextPage,
        showLoadMore: U.A.groupedFetchCount > 2,
        hasError: U.A.hasError,
        hasOlderLogs: U.A.hasOlderLogs,
        logs: null != n && null != t ? k.transformLogs(n, t) : [],
        actionFilter: U.A.actionFilter,
        userIdFilter: U.A.userIdFilter,
        theme: v.A.theme,
        hide: L.A.enabled,
    };
})(Y);
