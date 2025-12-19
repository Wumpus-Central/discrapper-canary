n.d(t, { f: () => b }), n(388685);
var i = n(54381),
    s = n(473749),
    l = n(481060),
    r = n(87051),
    a = n(225433),
    o = n(933557),
    d = n(471445),
    c = n(600164),
    u = n(592125),
    h = n(324067),
    g = n(699516),
    m = n(594174),
    x = n(621600),
    p = n(981631),
    j = n(388032),
    f = n(99079);
function v(e, t, n) {
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
class b extends s.PureComponent {
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
            s = i.getGuildId();
        null != s &&
            r.Z.updateChannelOverrideSettings(
                s,
                i.id,
                {
                    message_notifications: e,
                    muted: null != t && t,
                },
                n,
            );
    }
    handleRadioChange(e) {
        this.setMessageNotification(e, void 0, x.UE.notifications(e));
    }
    renderMessageNotificationsRadioOption(e) {
        let { messageNotifications: t, guildMuted: n, guildMessageNotifications: s } = this.props,
            r = t === e;
        return (
            (null == t || t === p.bL.NULL) && e === s && (r = !0),
            (0, i.jsx)(l.Checkbox, {
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
        null != n.parent_id && (e = u.Z.getChannel(n.parent_id));
        let s = (0, d.KS)(n);
        if (n.type === p.d4z.GUILD_CATEGORY && null != n.guild_id && "" !== n.guild_id) {
            let e = h.Z.getCategories(n.guild_id);
            t = j.intl.formatToPlainString(j.t["2KzH89"], { num: null != e[n.id] ? e[n.id].length : 0 });
        } else
            t =
                null != e
                    ? j.intl.formatToPlainString(j.t.L1zJgb, { categoryName: (0, o.F6)(e, m.default, g.Z) })
                    : j.intl.string(j.t.uIzfCE);
        return (0, i.jsxs)(c.Z, {
            grow: 1,
            className: f.nameContainer,
            children: [
                null != s ? (0, i.jsx)(s, { className: f.icon }) : null,
                (0, i.jsxs)("div", {
                    className: f.channelNameContainer,
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            className: f.channelName,
                            children: (0, o.F6)(n, m.default, g.Z),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            className: f.channelNameByline,
                            children: t,
                        }),
                    ],
                }),
            ],
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t } = this.props;
        return (0, i.jsxs)(c.Z, {
            grow: 0,
            shrink: 0,
            className: f.checkboxGroup,
            justify: c.Z.Justify.AROUND,
            align: c.Z.Align.CENTER,
            children: [
                (0, i.jsx)(c.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? f.checkboxContainerMuted : f.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(p.bL.ALL_MESSAGES),
                }),
                (0, i.jsx)(c.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? f.checkboxContainerMuted : f.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(p.bL.ONLY_MENTIONS),
                }),
                (0, i.jsx)(c.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? f.checkboxContainerMuted : f.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(p.bL.NO_MESSAGES),
                }),
                (0, i.jsx)(c.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: f.checkboxMute,
                    children: (0, i.jsx)(l.Checkbox, {
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
        return (0, i.jsxs)(l.Zbd, {
            ref: this.contentDomRef,
            outline: !0,
            editable: !0,
            className: e ? f.overrideHighlight : f.override,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, i.jsx)(a.Z, {
                    className: f.removeOverride,
                    onClick: this.handleDelete,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            v(this, "_timeout", void 0),
            v(this, "contentDomRef", s.createRef()),
            v(this, "state", { highlight: !1 }),
            v(this, "unhighlight", () => {
                this.setState({ highlight: !1 });
            }),
            v(this, "handleMute", (e) => {
                let { messageNotifications: t } = this.props;
                this.setMessageNotification(null != t ? t : p.bL.NULL, e, x.UE.muted(e));
            }),
            v(this, "handleDelete", () => {
                let { onDelete: e, channel: t } = this.props;
                this.setMessageNotification(p.bL.NULL, !1, x.ZB.OverrideDeleted), null != e && e(t.id);
            });
    }
}
