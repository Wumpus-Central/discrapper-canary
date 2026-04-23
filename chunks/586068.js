n.d(t, { KJ: () => j, N_: () => B, OS: () => v, Y9: () => w, c3: () => x, lg: () => H, nG: () => V, vw: () => F });
var i = n(627968),
    l = n(64700),
    r = n(939249),
    s = n(97808),
    o = n(778712),
    a = n(685761),
    d = n(173936),
    c = n(99677),
    u = n(194261),
    _ = n(34188),
    A = n(577473),
    E = n(403581),
    I = n(323384),
    h = n(625903),
    g = n(659421),
    C = n(329308),
    p = n(571694),
    S = n(47167),
    T = n(713654),
    N = n(523728),
    b = n(200470),
    L = n(769015),
    f = n(263063),
    m = n(376943),
    O = n(636585),
    G = n(71393),
    R = n(994500),
    U = n(287809),
    D = n(427262),
    y = n(985018),
    P = n(818061);
class M extends l.PureComponent {
    node;
    componentDidMount() {
        let { focused: e, onFocus: t } = this.props,
            { node: n } = this;
        e && null != n && t(n);
    }
    componentDidUpdate(e) {
        let { focused: t, onFocus: n } = this.props,
            { node: i } = this;
        null != i && t && !e.focused && n(i);
    }
    handleClick = (e) => {
        e.preventDefault();
        let { onClick: t } = this.props,
            { node: n } = this;
        null != n && t(e, n);
    };
    handleMouseEnter = (e) => {
        let { onMouseEnter: t } = this.props,
            { node: n } = this;
        null != n && t(e, n);
    };
    setRef = (e) => {
        this.node = e;
    };
    render() {
        let { focused: e, children: t, score: n, onContextMenu: l, id: s, "aria-label": o } = this.props;
        return (0, i.jsxs)(r.D, {
            role: "option",
            id: s,
            "aria-label": o,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: P.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: l,
            children: [t, null != n ? (0, i.jsx)("div", { className: P.fN, children: 0 | n }) : null],
        });
    }
}
class v extends l.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: P._C,
            children: (0, i.jsx)(f.Ay, { tabIndex: -1, guild: e, size: f.Ay.Sizes.MINI, className: P.$f }),
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: P.UU,
            children: (0, i.jsx)("span", { className: P.YW, children: e.name }),
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? P.XB : P.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: P.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return y.intl.formatToPlainString(y.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: o } = this.props;
        return (0, i.jsx)(M, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
class x extends l.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, T.gU)(e);
        if (null == t) return null;
        let n = (0, N.A)(e) ?? "";
        return (0, i.jsx)("div", {
            className: P.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: P.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: l, channel: r, isMentionLowImportance: s } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(b.A, { className: P.qS, value: n, lowImportance: s })),
            null != l && (t = (0, i.jsx)("span", { className: P.N4, children: (0, S.m1)(l, U.default, R.A) })),
            (0, i.jsxs)("div", {
                className: P.UU,
                children: [
                    (0, i.jsx)("span", { className: P.YW, children: (0, S.m1)(r, U.default, R.A) }),
                    e,
                    this.renderVoiceStates(),
                    t,
                ],
            })
        );
    }
    renderVoiceStates() {
        let { voiceStates: e, channel: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(O.A, {
                  className: P.x7,
                  guildId: t.guild_id,
                  users: e.map((e) => {
                      let { user: t } = e;
                      return { user: t };
                  }),
                  max: 4,
              });
    }
    renderContent() {
        let { unread: e, mentions: t, children: n } = this.props;
        return (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: e || (null != t && t > 0) ? P.XB : P.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: P.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = G.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, S.m1)(e, U.default, R.A),
            i = (0, N.A)(e);
        return y.intl.formatToPlainString(y.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: o } = this.props;
        return (0, i.jsx)(M, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
class V extends l.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: P.IU,
            children: (0, i.jsx)(s.eu, { src: (0, p.Y)(e), size: o._3.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(b.A, { className: P.qS, value: t })),
            (0, i.jsxs)("div", {
                className: P.UU,
                children: [(0, i.jsx)("span", { className: P.YW, children: (0, S.m1)(n, U.default, R.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? P.XB : P.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: P.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, S.m1)(e, U.default, R.A);
        return null != t && t > 0
            ? y.intl.formatToPlainString(y.t.LYdVfN, { name: n, mentions: t })
            : y.intl.formatToPlainString(y.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: o } = this.props;
        return (0, i.jsx)(M, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
class j extends l.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: P.zc,
            children: (0, i.jsx)(s.eu, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: o._3.SIZE_20,
                status: t,
                isMobile: n,
            }),
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            i = R.A.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = i ?? D.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            l = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(b.A, { className: P.qS, value: n })),
            (0, i.jsxs)("div", {
                className: P.UU,
                children: [
                    (0, i.jsx)("span", { className: P.YW, children: l }),
                    e,
                    (0, i.jsx)("span", { className: P.Xh, children: D.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? P.XB : P.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: P.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = D.Ay.getUserTag(t);
        return null != e && e > 0
            ? y.intl.formatToPlainString(y.t["6b9UrR"], { name: n, id: i, mentions: e })
            : y.intl.formatToPlainString(y.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: o } = this.props;
        return (0, i.jsx)(M, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
class H extends l.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: P.xr,
            children: [
                (0, i.jsx)("div", {
                    className: P.zc,
                    children: (0, i.jsx)(L.A, { tabIndex: -1, className: P.Gt, game: t, size: P.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: P.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: l, id: r } = this.props;
        return (0, i.jsx)(M, {
            id: r,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: l,
            children: this.renderContent(),
        });
    }
}
class w extends l.Component {
    render() {
        return (0, i.jsx)("div", {
            className: P.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: P.xr,
                children: (0, i.jsx)("div", { className: P.wx, children: this.props.children }),
            }),
        });
    }
}
class B extends l.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: l } = this.props;
        if (null != n.inviteCode)
            (e = y.intl.string(y.t.w6QG3F)), (t = (0, i.jsx)(a.f, { size: "xs", color: "currentColor" }));
        else {
            let l = (0, m.vu)(n.path);
            null == l || void 0 === l.messageId
                ? ((e = y.intl.string(y.t.qbSCqj)), (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" })))
                : (0, m.r9)(l)
                  ? ((e = y.intl.string(y.t["6Fd/j1"])), (t = (0, i.jsx)(c.t, { size: "xs", color: "currentColor" })))
                  : ((e = y.intl.string(y.t.jQRwp4)), (t = (0, i.jsx)(u.X, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: P.xr,
            children: [
                (0, i.jsx)("div", { className: P.zc, children: t }),
                e,
                (0, i.jsx)("div", { className: P.Lr, children: l }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: o } = this.props;
        return (0, i.jsx)(M, {
            id: o,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
class F extends l.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: l } = this.props;
        switch (n.type) {
            case C.t1.SHOP:
                (e = y.intl.string(y.t.pWG4ze)), (t = (0, i.jsx)(_.U, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.SHOP_ORBS_TAB:
                (e = y.intl.string(y.t.EBYkzk)), (t = (0, i.jsx)(_.U, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.QUEST_ORBS:
                (e = `${y.intl.string(y.t.ElYQFS)} ${y.intl.string(y.t.JALI2K)}`),
                    (t = (0, i.jsx)(A.r, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.NITRO_HOME:
                (e = y.intl.string(y.t.Ipxkog)), (t = (0, i.jsx)(E.t, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.QUEST_HOME:
                (e = y.intl.string(y.t.JALI2K)), (t = (0, i.jsx)(A.r, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.APPS_HOME:
                (e = y.intl.string(y.t.PHjkRE)), (t = (0, i.jsx)(I.k, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.SETTINGS:
                (e = n.label ?? y.intl.string(y.t["3D5yo/"])),
                    (t = (0, i.jsx)(h.Z, { size: "xs", color: "currentColor" }));
                break;
            case C.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(g.H, { size: "xs", color: "currentColor" });
                break;
            default:
                (e = n.id), (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" }));
        }
        return (0, i.jsxs)("div", {
            className: P.xr,
            children: [
                (0, i.jsx)("div", { className: P.zc, children: t }),
                (0, i.jsx)("div", { className: P.UU, children: e }),
                (0, i.jsx)("div", { className: P.Lr, children: l }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: o } = this.props;
        return (0, i.jsx)(M, {
            id: o,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
