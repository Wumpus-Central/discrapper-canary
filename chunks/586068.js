n.d(t, { KJ: () => L, N_: () => G, OS: () => f, Y9: () => R, c3: () => N, lg: () => O, nG: () => m, vw: () => U });
var i = n(627968),
    r = n(64700),
    l = n(397927),
    o = n(329308),
    s = n(571694),
    a = n(47167),
    d = n(713654),
    c = n(523728),
    u = n(200470),
    _ = n(769015),
    A = n(263063),
    E = n(376943),
    I = n(636585),
    h = n(71393),
    g = n(994500),
    C = n(287809),
    p = n(427262),
    T = n(985018),
    S = n(947997);
class b extends r.PureComponent {
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
        let { focused: e, children: t, score: n, onContextMenu: r, id: o, "aria-label": s } = this.props;
        return (0, i.jsxs)(l.DUT, {
            role: "option",
            id: o,
            "aria-label": s,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: S.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [t, null != n ? (0, i.jsx)("div", { className: S.fN, children: 0 | n }) : null],
        });
    }
}
class f extends r.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: S._C,
            children: (0, i.jsx)(A.Ay, { tabIndex: -1, guild: e, size: A.Ay.Sizes.MINI, className: S.$f }),
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: S.UU,
            children: (0, i.jsx)("span", { className: S.YW, children: e.name }),
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? S.XB : S.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: S.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return T.intl.formatToPlainString(T.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: l, score: o, id: s } = this.props;
        return (0, i.jsx)(b, {
            id: s,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: o,
            children: this.renderContent(),
        });
    }
}
class N extends r.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, d.gU)(e);
        if (null == t) return null;
        let n = (0, c.A)(e) ?? "";
        return (0, i.jsx)("div", {
            className: S.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: S.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: r, channel: l, isMentionLowImportance: o } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(u.A, { className: S.qS, value: n, lowImportance: o })),
            null != r && (t = (0, i.jsx)("span", { className: S.N4, children: (0, a.m1)(r, C.default, g.A) })),
            (0, i.jsxs)("div", {
                className: S.UU,
                children: [
                    (0, i.jsx)("span", { className: S.YW, children: (0, a.m1)(l, C.default, g.A) }),
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
            : (0, i.jsx)(I.A, {
                  className: S.x7,
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
            className: e || (null != t && t > 0) ? S.XB : S.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: S.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = h.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, a.m1)(e, C.default, g.A),
            i = (0, c.A)(e);
        return T.intl.formatToPlainString(T.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: l, score: o, id: s } = this.props;
        return (0, i.jsx)(b, {
            id: s,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: o,
            children: this.renderContent(),
        });
    }
}
class m extends r.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: S.IU,
            children: (0, i.jsx)(l.euF, { src: (0, s.Y)(e), size: l._3J.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(u.A, { className: S.qS, value: t })),
            (0, i.jsxs)("div", {
                className: S.UU,
                children: [(0, i.jsx)("span", { className: S.YW, children: (0, a.m1)(n, C.default, g.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? S.XB : S.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: S.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, a.m1)(e, C.default, g.A);
        return null != t && t > 0
            ? T.intl.formatToPlainString(T.t.LYdVfN, { name: n, mentions: t })
            : T.intl.formatToPlainString(T.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: l, score: o, id: s } = this.props;
        return (0, i.jsx)(b, {
            id: s,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: o,
            children: this.renderContent(),
        });
    }
}
class L extends r.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: S.zc,
            children: (0, i.jsx)(l.euF, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: l._3J.SIZE_20,
                status: t,
                isMobile: n,
            }),
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            i = g.A.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = i ?? p.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            r = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(u.A, { className: S.qS, value: n })),
            (0, i.jsxs)("div", {
                className: S.UU,
                children: [
                    (0, i.jsx)("span", { className: S.YW, children: r }),
                    e,
                    (0, i.jsx)("span", { className: S.Xh, children: p.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? S.XB : S.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: S.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = p.Ay.getUserTag(t);
        return null != e && e > 0
            ? T.intl.formatToPlainString(T.t["6b9UrR"], { name: n, id: i, mentions: e })
            : T.intl.formatToPlainString(T.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: l, score: o, id: s } = this.props;
        return (0, i.jsx)(b, {
            id: s,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: o,
            children: this.renderContent(),
        });
    }
}
class O extends r.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: S.xr,
            children: [
                (0, i.jsx)("div", {
                    className: S.zc,
                    children: (0, i.jsx)(_.A, { tabIndex: -1, className: S.Gt, game: t, size: S.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: S.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: l } = this.props;
        return (0, i.jsx)(b, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent(),
        });
    }
}
class R extends r.Component {
    render() {
        return (0, i.jsx)("div", {
            className: S.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: S.xr,
                children: (0, i.jsx)("div", { className: S.wx, children: this.props.children }),
            }),
        });
    }
}
class G extends r.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: r } = this.props;
        if (null != n.inviteCode)
            (e = T.intl.string(T.t.w6QG3F)), (t = (0, i.jsx)(l.fhe, { size: "xs", color: "currentColor" }));
        else {
            let r = (0, E.vu)(n.path);
            null == r || void 0 === r.messageId
                ? ((e = T.intl.string(T.t.qbSCqj)), (t = (0, i.jsx)(l.qYV, { size: "xs", color: "currentColor" })))
                : (0, E.r9)(r)
                  ? ((e = T.intl.string(T.t["6Fd/j1"])), (t = (0, i.jsx)(l.txs, { size: "xs", color: "currentColor" })))
                  : ((e = T.intl.string(T.t.jQRwp4)), (t = (0, i.jsx)(l.XAi, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: S.xr,
            children: [
                (0, i.jsx)("div", { className: S.zc, children: t }),
                e,
                (0, i.jsx)("div", { className: S.Lr, children: r }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: l, score: o, id: s } = this.props;
        return (0, i.jsx)(b, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: o,
            children: this.renderContent(),
        });
    }
}
class U extends r.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: r } = this.props;
        switch (n.type) {
            case o.t1.SHOP:
                (e = T.intl.string(T.t.pWG4ze)), (t = (0, i.jsx)(l.U1X, { size: "xs", color: "currentColor" }));
                break;
            case o.t1.SHOP_ORBS_TAB:
                (e = T.intl.string(T.t.EBYkzk)), (t = (0, i.jsx)(l.U1X, { size: "xs", color: "currentColor" }));
                break;
            case o.t1.QUEST_ORBS:
                (e = `${T.intl.string(T.t.ElYQFS)} ${T.intl.string(T.t.JALI2K)}`),
                    (t = (0, i.jsx)(l.r2v, { size: "xs", color: "currentColor" }));
                break;
            case o.t1.NITRO_HOME:
                (e = T.intl.string(T.t.Ipxkog)), (t = (0, i.jsx)(l.tvc, { size: "xs", color: "currentColor" }));
                break;
            case o.t1.QUEST_HOME:
                (e = T.intl.string(T.t.JALI2K)), (t = (0, i.jsx)(l.r2v, { size: "xs", color: "currentColor" }));
                break;
            case o.t1.APPS_HOME:
                (e = T.intl.string(T.t.PHjkRE)), (t = (0, i.jsx)(l.k9F, { size: "xs", color: "currentColor" }));
                break;
            case o.t1.SETTINGS:
                (e = n.label ?? T.intl.string(T.t["3D5yo/"])),
                    (t = (0, i.jsx)(l.Zes, { size: "xs", color: "currentColor" }));
                break;
            case o.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(l.HUC, { size: "xs", color: "currentColor" });
                break;
            default:
                (e = n.id), (t = (0, i.jsx)(l.qYV, { size: "xs", color: "currentColor" }));
        }
        return (0, i.jsxs)("div", {
            className: S.xr,
            children: [
                (0, i.jsx)("div", { className: S.zc, children: t }),
                (0, i.jsx)("div", { className: S.UU, children: e }),
                (0, i.jsx)("div", { className: S.Lr, children: r }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: l, score: o, id: s } = this.props;
        return (0, i.jsx)(b, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: l,
            score: o,
            children: this.renderContent(),
        });
    }
}
