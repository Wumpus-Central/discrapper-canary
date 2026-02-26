n.d(t, { KJ: () => L, N_: () => R, OS: () => T, Y9: () => G, c3: () => b, lg: () => O, nG: () => N, vw: () => U });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    s = n(329308),
    l = n(571694),
    o = n(47167),
    d = n(713654),
    _ = n(523728),
    c = n(200470),
    u = n(769015),
    A = n(263063),
    g = n(376943),
    E = n(636585),
    I = n(71393),
    h = n(994500),
    C = n(287809),
    p = n(427262),
    S = n(985018),
    f = n(611040);
class m extends r.PureComponent {
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
        let { focused: e, children: t, score: n, onContextMenu: r, id: s, "aria-label": l } = this.props;
        return (0, i.jsxs)(a.DUT, {
            role: "option",
            id: s,
            "aria-label": l,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: f.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [t, null != n ? (0, i.jsx)("div", { className: f.fN, children: 0 | n }) : null],
        });
    }
}
class T extends r.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: f._C,
            children: (0, i.jsx)(A.Ay, { tabIndex: -1, guild: e, size: A.Ay.Sizes.MINI, className: f.$f }),
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: f.UU,
            children: (0, i.jsx)("span", { className: f.YW, children: e.name }),
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? f.XB : f.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: f.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return S.intl.formatToPlainString(S.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(m, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class b extends r.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, d.gU)(e);
        if (null == t) return null;
        let n = (0, _.A)(e) ?? "";
        return (0, i.jsx)("div", {
            className: f.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: f.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: r, channel: a, isMentionLowImportance: s } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(c.A, { className: f.qS, value: n, lowImportance: s })),
            null != r && (t = (0, i.jsx)("span", { className: f.N4, children: (0, o.m1)(r, C.default, h.A) })),
            (0, i.jsxs)("div", {
                className: f.UU,
                children: [
                    (0, i.jsx)("span", { className: f.YW, children: (0, o.m1)(a, C.default, h.A) }),
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
            : (0, i.jsx)(E.A, {
                  className: f.x7,
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
            className: e || (null != t && t > 0) ? f.XB : f.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: f.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = I.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, o.m1)(e, C.default, h.A),
            i = (0, _.A)(e);
        return S.intl.formatToPlainString(S.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(m, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class N extends r.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: f.IU,
            children: (0, i.jsx)(a.euF, { src: (0, l.Y)(e), size: a._3J.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(c.A, { className: f.qS, value: t })),
            (0, i.jsxs)("div", {
                className: f.UU,
                children: [(0, i.jsx)("span", { className: f.YW, children: (0, o.m1)(n, C.default, h.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? f.XB : f.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: f.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, o.m1)(e, C.default, h.A);
        return null != t && t > 0
            ? S.intl.formatToPlainString(S.t.LYdVfN, { name: n, mentions: t })
            : S.intl.formatToPlainString(S.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(m, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class L extends r.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: f.zc,
            children: (0, i.jsx)(a.euF, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: a._3J.SIZE_20,
                status: t,
                isMobile: n,
            }),
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            i = h.A.getNickname(t.id);
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
            null != n && n > 0 && (e = (0, i.jsx)(c.A, { className: f.qS, value: n })),
            (0, i.jsxs)("div", {
                className: f.UU,
                children: [
                    (0, i.jsx)("span", { className: f.YW, children: r }),
                    e,
                    (0, i.jsx)("span", { className: f.Xh, children: p.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? f.XB : f.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: f.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = p.Ay.getUserTag(t);
        return null != e && e > 0
            ? S.intl.formatToPlainString(S.t["6b9UrR"], { name: n, id: i, mentions: e })
            : S.intl.formatToPlainString(S.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(m, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class O extends r.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: f.xr,
            children: [
                (0, i.jsx)("div", {
                    className: f.zc,
                    children: (0, i.jsx)(u.A, { tabIndex: -1, className: f.Gt, game: t, size: f.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: f.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: a } = this.props;
        return (0, i.jsx)(m, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent(),
        });
    }
}
class G extends r.Component {
    render() {
        return (0, i.jsx)("div", {
            className: f.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: f.xr,
                children: (0, i.jsx)("div", { className: f.wx, children: this.props.children }),
            }),
        });
    }
}
class R extends r.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: r } = this.props,
            s = (0, g.vu)(n.path);
        return (
            null == s || void 0 === s.messageId
                ? ((e = S.intl.string(S.t.qbSCqj)), (t = (0, i.jsx)(a.qYV, { size: "xs", color: "currentColor" })))
                : (0, g.r9)(s)
                  ? ((e = S.intl.string(S.t["6Fd/j1"])), (t = (0, i.jsx)(a.txs, { size: "xs", color: "currentColor" })))
                  : ((e = S.intl.string(S.t.jQRwp4)), (t = (0, i.jsx)(a.XAi, { size: "xs", color: "currentColor" }))),
            (0, i.jsxs)("div", {
                className: f.xr,
                children: [
                    (0, i.jsx)("div", { className: f.zc, children: t }),
                    e,
                    (0, i.jsx)("div", { className: f.Lr, children: r }),
                ],
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(m, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
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
            case s.t1.SHOP:
                (e = S.intl.string(S.t.pWG4ze)), (t = (0, i.jsx)(a.U1X, { size: "xs", color: "currentColor" }));
                break;
            case s.t1.SHOP_ORBS_TAB:
                (e = S.intl.string(S.t.EBYkzk)), (t = (0, i.jsx)(a.U1X, { size: "xs", color: "currentColor" }));
                break;
            case s.t1.QUEST_ORBS:
                (e = `${S.intl.string(S.t.ElYQFS)} ${S.intl.string(S.t.JALI2K)}`),
                    (t = (0, i.jsx)(a.r2v, { size: "xs", color: "currentColor" }));
                break;
            case s.t1.NITRO_HOME:
                (e = S.intl.string(S.t.Ipxkog)), (t = (0, i.jsx)(a.tvc, { size: "xs", color: "currentColor" }));
                break;
            case s.t1.QUEST_HOME:
                (e = S.intl.string(S.t.JALI2K)), (t = (0, i.jsx)(a.r2v, { size: "xs", color: "currentColor" }));
                break;
            case s.t1.APPS_HOME:
                (e = S.intl.string(S.t.PHjkRE)), (t = (0, i.jsx)(a.k9F, { size: "xs", color: "currentColor" }));
                break;
            case s.t1.SETTINGS:
                (e = n.label ?? S.intl.string(S.t["3D5yo/"])),
                    (t = (0, i.jsx)(a.Zes, { size: "xs", color: "currentColor" }));
                break;
            case s.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(a.HUC, { size: "xs", color: "currentColor" });
                break;
            default:
                (e = n.id), (t = (0, i.jsx)(a.qYV, { size: "xs", color: "currentColor" }));
        }
        return (0, i.jsxs)("div", {
            className: f.xr,
            children: [
                (0, i.jsx)("div", { className: f.zc, children: t }),
                (0, i.jsx)("div", { className: f.UU, children: e }),
                (0, i.jsx)("div", { className: f.Lr, children: r }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: l } = this.props;
        return (0, i.jsx)(m, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
