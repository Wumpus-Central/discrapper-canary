n.d(t, { f: () => f }), n(388685);
var i = n(951288),
    s = n(647438),
    l = n(755721),
    r = n(481060),
    a = n(87051),
    o = n(225433),
    d = n(933557),
    c = n(471445),
    u = n(600164),
    h = n(592125),
    g = n(324067),
    m = n(699516),
    x = n(594174),
    v = n(621600),
    p = n(981631),
    j = n(388032),
    N = n(385888);
function S(e, t, n) {
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
class f extends s.PureComponent {
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
            a.Z.updateChannelOverrideSettings(
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
        this.setMessageNotification(e, void 0, v.UE.notifications(e));
    }
    renderMessageNotificationsRadioOption(e) {
        let {
                messageNotifications: t,
                guildMuted: n,
                muted: s,
                guildMessageNotifications: r,
                checkboxColor: a,
            } = this.props,
            o = t === e;
        (null == t || t === p.bL.NULL) && e === r && (o = !0);
        let d = l.M0.INVERTED;
        return (
            (s || t === p.bL.NULL || null == t) && (d = l.M0.GHOST),
            (0, i.jsx)(l.$q, {
                value: !n && o,
                disabled: n,
                shape: l.zV.ROUND,
                color: a,
                type: d,
                onChange: this.handleRadioChange.bind(this, e),
            })
        );
    }
    renderName() {
        let e,
            t,
            { channel: n } = this.props;
        null != n.parent_id && (e = h.Z.getChannel(n.parent_id));
        let s = (0, c.KS)(n);
        if (n.type === p.d4z.GUILD_CATEGORY && null != n.guild_id && "" !== n.guild_id) {
            let e = g.Z.getCategories(n.guild_id);
            t = j.intl.formatToPlainString(j.t["2KzH8/"], { num: null != e[n.id] ? e[n.id].length : 0 });
        } else
            t =
                null != e
                    ? j.intl.formatToPlainString(j.t.L1zJgY, { categoryName: (0, d.F6)(e, x.default, m.Z) })
                    : j.intl.string(j.t.uIzfCA);
        return (0, i.jsxs)(u.Z, {
            grow: 1,
            className: N.nameContainer,
            children: [
                null != s ? (0, i.jsx)(s, { className: N.icon }) : null,
                (0, i.jsxs)("div", {
                    className: N.channelNameContainer,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            className: N.channelName,
                            children: (0, d.F6)(n, x.default, m.Z),
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            className: N.channelNameByline,
                            children: t,
                        }),
                    ],
                }),
            ],
        });
    }
    renderOptions() {
        let { muted: e, guildMuted: t } = this.props;
        return (0, i.jsxs)(u.Z, {
            grow: 0,
            shrink: 0,
            className: N.checkboxGroup,
            justify: u.Z.Justify.AROUND,
            align: u.Z.Align.CENTER,
            children: [
                (0, i.jsx)(u.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? N.checkboxContainerMuted : N.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(p.bL.ALL_MESSAGES),
                }),
                (0, i.jsx)(u.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? N.checkboxContainerMuted : N.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(p.bL.ONLY_MENTIONS),
                }),
                (0, i.jsx)(u.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? N.checkboxContainerMuted : N.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(p.bL.NO_MESSAGES),
                }),
                (0, i.jsx)(u.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: N.checkboxMute,
                    children: (0, i.jsx)(l.$q, {
                        value: e,
                        shape: l.zV.BOX,
                        type: l.M0.INVERTED,
                        onChange: this.handleMute,
                    }),
                }),
            ],
        });
    }
    render() {
        let { highlight: e } = this.state;
        return (0, i.jsxs)(r.Zbd, {
            ref: this.contentDomRef,
            outline: !0,
            editable: !0,
            className: e ? N.overrideHighlight : N.override,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, i.jsx)(o.Z, {
                    className: N.removeOverride,
                    onClick: this.handleDelete,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "_timeout", void 0),
            S(this, "contentDomRef", s.createRef()),
            S(this, "state", { highlight: !1 }),
            S(this, "unhighlight", () => {
                this.setState({ highlight: !1 });
            }),
            S(this, "handleMute", (e, t) => {
                let { messageNotifications: n } = this.props;
                this.setMessageNotification(null != n ? n : p.bL.NULL, t, v.UE.muted(t));
            }),
            S(this, "handleDelete", () => {
                let { onDelete: e, channel: t } = this.props;
                this.setMessageNotification(p.bL.NULL, !1, v.ZB.OverrideDeleted), null != e && e(t.id);
            });
    }
}
