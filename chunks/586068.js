n.d(t, { KJ: () => b, N_: () => O, OS: () => S, Y9: () => v, c3: () => f, lg: () => R, nG: () => N, vw: () => j });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(329308),
    l = n(571694),
    o = n(47167),
    c = n(713654),
    d = n(523728),
    u = n(200470),
    _ = n(769015),
    m = n(263063),
    A = n(376943),
    g = n(636585),
    E = n(71393),
    h = n(994500),
    p = n(287809),
    C = n(427262),
    x = n(985018),
    T = n(649134);
class I extends s.PureComponent {
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
        let { focused: e, children: t, score: n, onContextMenu: s, id: a, "aria-label": l } = this.props;
        return (0, i.jsxs)(r.DUT, {
            role: "option",
            id: a,
            "aria-label": l,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: T.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: s,
            children: [t, null != n ? (0, i.jsx)("div", { className: T.fN, children: 0 | n }) : null],
        });
    }
}
class S extends s.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: T._C,
            children: (0, i.jsx)(m.A, { tabIndex: -1, guild: e, size: m.A.Sizes.MINI, className: T.$f }),
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: T.UU,
            children: (0, i.jsx)("span", { className: T.YW, children: e.name }),
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? T.XB : T.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: T.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return x.intl.formatToPlainString(x.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: a, id: l } = this.props;
        return (0, i.jsx)(I, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: a,
            children: this.renderContent(),
        });
    }
}
class f extends s.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, c.gU)(e);
        if (null == t) return null;
        let n = (0, d.A)(e) ?? "";
        return (0, i.jsx)("div", {
            className: T.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: T.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: s, channel: r, isMentionLowImportance: a } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(u.A, { className: T.qS, value: n, lowImportance: a })),
            null != s && (t = (0, i.jsx)("span", { className: T.N4, children: (0, o.m1)(s, p.default, h.A) })),
            (0, i.jsxs)("div", {
                className: T.UU,
                children: [
                    (0, i.jsx)("span", { className: T.YW, children: (0, o.m1)(r, p.default, h.A) }),
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
            : (0, i.jsx)(g.A, {
                  className: T.x7,
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
            className: e || (null != t && t > 0) ? T.XB : T.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: T.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = E.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, o.m1)(e, p.default, h.A),
            i = (0, d.A)(e);
        return x.intl.formatToPlainString(x.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: a, id: l } = this.props;
        return (0, i.jsx)(I, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: a,
            children: this.renderContent(),
        });
    }
}
class N extends s.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: T.IU,
            children: (0, i.jsx)(r.euF, { src: (0, l.Y)(e), size: r._3J.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(u.A, { className: T.qS, value: t })),
            (0, i.jsxs)("div", {
                className: T.UU,
                children: [(0, i.jsx)("span", { className: T.YW, children: (0, o.m1)(n, p.default, h.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? T.XB : T.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: T.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, o.m1)(e, p.default, h.A);
        return null != t && t > 0
            ? x.intl.formatToPlainString(x.t.LYdVfN, { name: n, mentions: t })
            : x.intl.formatToPlainString(x.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: a, id: l } = this.props;
        return (0, i.jsx)(I, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: a,
            children: this.renderContent(),
        });
    }
}
class b extends s.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: T.zc,
            children: (0, i.jsx)(r.euF, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: r._3J.SIZE_20,
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
                (e = i ?? C.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            s = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(u.A, { className: T.qS, value: n })),
            (0, i.jsxs)("div", {
                className: T.UU,
                children: [
                    (0, i.jsx)("span", { className: T.YW, children: s }),
                    e,
                    (0, i.jsx)("span", { className: T.Xh, children: C.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? T.XB : T.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: T.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = C.Ay.getUserTag(t);
        return null != e && e > 0
            ? x.intl.formatToPlainString(x.t["6b9UrR"], { name: n, id: i, mentions: e })
            : x.intl.formatToPlainString(x.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: a, id: l } = this.props;
        return (0, i.jsx)(I, {
            id: l,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: a,
            children: this.renderContent(),
        });
    }
}
class R extends s.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: T.xr,
            children: [
                (0, i.jsx)("div", {
                    className: T.zc,
                    children: (0, i.jsx)(_.A, { tabIndex: -1, className: T.Gt, game: t, size: T.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: T.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: s, id: r } = this.props;
        return (0, i.jsx)(I, {
            id: r,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: s,
            children: this.renderContent(),
        });
    }
}
class v extends s.Component {
    render() {
        return (0, i.jsx)("div", {
            className: T.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: T.xr,
                children: (0, i.jsx)("div", { className: T.wx, children: this.props.children }),
            }),
        });
    }
}
class O extends s.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: s } = this.props,
            a = (0, A.vu)(n.path);
        return (
            null == a || void 0 === a.messageId
                ? ((e = x.intl.string(x.t.qbSCqj)), (t = (0, i.jsx)(r.qYV, { size: "xs", color: "currentColor" })))
                : (0, A.r9)(a)
                  ? ((e = x.intl.string(x.t["6Fd/j1"])), (t = (0, i.jsx)(r.txs, { size: "xs", color: "currentColor" })))
                  : ((e = x.intl.string(x.t.jQRwp4)), (t = (0, i.jsx)(r.XAi, { size: "xs", color: "currentColor" }))),
            (0, i.jsxs)("div", {
                className: T.xr,
                children: [
                    (0, i.jsx)("div", { className: T.zc, children: t }),
                    e,
                    (0, i.jsx)("div", { className: T.Lr, children: s }),
                ],
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: a, id: l } = this.props;
        return (0, i.jsx)(I, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: a,
            children: this.renderContent(),
        });
    }
}
class j extends s.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: s } = this.props;
        switch (n.type) {
            case a.t1.SHOP:
                (e = x.intl.string(x.t.pWG4ze)), (t = (0, i.jsx)(r.U1X, { size: "xs", color: "currentColor" }));
                break;
            case a.t1.SHOP_ORBS_TAB:
                (e = x.intl.string(x.t.EBYkzk)), (t = (0, i.jsx)(r.U1X, { size: "xs", color: "currentColor" }));
                break;
            case a.t1.QUEST_ORBS:
                (e = `${x.intl.string(x.t.ElYQFS)} ${x.intl.string(x.t.JALI2K)}`),
                    (t = (0, i.jsx)(r.r2v, { size: "xs", color: "currentColor" }));
                break;
            case a.t1.NITRO_HOME:
                (e = x.intl.string(x.t.Ipxkog)), (t = (0, i.jsx)(r.tvc, { size: "xs", color: "currentColor" }));
                break;
            case a.t1.QUEST_HOME:
                (e = x.intl.string(x.t.JALI2K)), (t = (0, i.jsx)(r.r2v, { size: "xs", color: "currentColor" }));
                break;
            case a.t1.APPS_HOME:
                (e = x.intl.string(x.t.PHjkRE)), (t = (0, i.jsx)(r.k9F, { size: "xs", color: "currentColor" }));
                break;
            case a.t1.SETTINGS:
                (e = n.label ?? x.intl.string(x.t["3D5yo/"])),
                    (t = (0, i.jsx)(r.Zes, { size: "xs", color: "currentColor" }));
                break;
            case a.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(r.HUC, { size: "xs", color: "currentColor" });
                break;
            default:
                (e = n.id), (t = (0, i.jsx)(r.qYV, { size: "xs", color: "currentColor" }));
        }
        return (0, i.jsxs)("div", {
            className: T.xr,
            children: [
                (0, i.jsx)("div", { className: T.zc, children: t }),
                (0, i.jsx)("div", { className: T.UU, children: e }),
                (0, i.jsx)("div", { className: T.Lr, children: s }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: s, focused: r, score: a, id: l } = this.props;
        return (0, i.jsx)(I, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: s,
            focused: r,
            score: a,
            children: this.renderContent(),
        });
    }
}
