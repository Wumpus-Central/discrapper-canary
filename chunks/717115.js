n.d(t, { O: () => A }), n(896048);
var i = n(627968),
    l = n(64700),
    s = n(397927),
    r = n(832712),
    a = n(414079),
    d = n(47167),
    o = n(713654),
    c = n(235986),
    u = n(734057),
    g = n(769765),
    h = n(994500),
    m = n(287809),
    x = n(477427),
    j = n(652215),
    p = n(985018),
    b = n(453235);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class A extends l.PureComponent {
    highlight() {
        this.setState({ highlight: !0 }, () => {
            null != this._timeout && clearTimeout(this._timeout), (this._timeout = setTimeout(this.unhighlight, 1000));
        });
    }
    componentDidMount() {
        if (this.props.autoFocus) {
            var e;
            null == (e = this.contentDomRef.current) || e.scrollIntoView({ behavior: "smooth" }), this.highlight();
        }
    }
    componentWillUnmount() {
        null != this._timeout && clearTimeout(this._timeout);
    }
    setMessageNotification(e, t, n) {
        let { channel: i } = this.props,
            l = i.getGuildId();
        null != l &&
            r.A.updateChannelOverrideSettings(
                l,
                i.id,
                {
                    message_notifications: e,
                    muted: null != t && t,
                },
                n,
            );
    }
    handleRadioChange(e) {
        this.setMessageNotification(e, void 0, x.G_.notifications(e));
    }
    renderMessageNotificationsRadioOption(e) {
        let { messageNotifications: t, guildMuted: n, guildMessageNotifications: l } = this.props,
            r = t === e;
        return (
            (null == t || t === j.orn.NULL) && e === l && (r = !0),
            (0, i.jsx)(s.Checkbox, {
                checked: !n && r,
                label: "",
                disabled: n,
                onChange: this.handleRadioChange.bind(this, e),
            })
        );
    }
    renderName() {
        let e,
            t,
            { channel: n } = this.props;
        null != n.parent_id && (e = u.A.getChannel(n.parent_id));
        let l = (0, o.gU)(n);
        if (n.type === j.rbe.GUILD_CATEGORY && null != n.guild_id && "" !== n.guild_id) {
            let e = g.A.getCategories(n.guild_id);
            t = p.intl.formatToPlainString(p.t["2KzH89"], { num: null != e[n.id] ? e[n.id].length : 0 });
        } else
            t =
                null != e
                    ? p.intl.formatToPlainString(p.t.L1zJgb, { categoryName: (0, d.m1)(e, m.default, h.A) })
                    : p.intl.string(p.t.uIzfCE);
        return (0, i.jsxs)(c.A, {
            grow: 1,
            className: b.VW,
            children: [
                null != l ? (0, i.jsx)(l, { className: b.Kk }) : null,
                (0, i.jsxs)("div", {
                    className: b.aT,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            className: b.HA,
                            children: (0, d.m1)(n, m.default, h.A),
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            className: b.uM,
                            children: t,
                        }),
                    ],
                }),
            ],
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t } = this.props;
        return (0, i.jsxs)(c.A, {
            grow: 0,
            shrink: 0,
            className: b.Pm,
            justify: c.A.Justify.AROUND,
            align: c.A.Align.CENTER,
            children: [
                (0, i.jsx)(c.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? b.mH : b.HI,
                    children: this.renderMessageNotificationsRadioOption(j.orn.ALL_MESSAGES),
                }),
                (0, i.jsx)(c.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? b.mH : b.HI,
                    children: this.renderMessageNotificationsRadioOption(j.orn.ONLY_MENTIONS),
                }),
                (0, i.jsx)(c.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? b.mH : b.HI,
                    children: this.renderMessageNotificationsRadioOption(j.orn.NO_MESSAGES),
                }),
                (0, i.jsx)(c.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: b.dy,
                    children: (0, i.jsx)(s.Checkbox, {
                        checked: e,
                        label: "",
                        onChange: this.handleMute,
                    }),
                }),
            ],
        });
    }
    render() {
        let { highlight: e } = this.state;
        return (0, i.jsxs)(s.ZpM, {
            ref: this.contentDomRef,
            outline: !0,
            editable: !0,
            className: e ? b.J$ : b.$Z,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, i.jsx)(a.A, {
                    className: b.ZY,
                    onClick: this.handleDelete,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            N(this, "_timeout", void 0),
            N(this, "contentDomRef", l.createRef()),
            N(this, "state", { highlight: !1 }),
            N(this, "unhighlight", () => {
                this.setState({ highlight: !1 });
            }),
            N(this, "handleMute", (e) => {
                let { messageNotifications: t } = this.props;
                this.setMessageNotification(null != t ? t : j.orn.NULL, e, x.G_.muted(e));
            }),
            N(this, "handleDelete", () => {
                let { onDelete: e, channel: t } = this.props;
                this.setMessageNotification(j.orn.NULL, !1, x.fd.OverrideDeleted), null != e && e(t.id);
            });
    }
}
