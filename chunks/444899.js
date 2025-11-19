n.d(t, { f: () => b }), n(388685);
var i = n(54381),
    s = n(473749),
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
    p = n(621600),
    v = n(981631),
    j = n(388032),
    f = n(681296);
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
        this.setMessageNotification(e, void 0, p.UE.notifications(e));
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
        (null == t || t === v.bL.NULL) && e === r && (o = !0);
        let d = l.M0.INVERTED;
        return (
            (s || t === v.bL.NULL || null == t) && (d = l.M0.GHOST),
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
        if (n.type === v.d4z.GUILD_CATEGORY && null != n.guild_id && "" !== n.guild_id) {
            let e = g.Z.getCategories(n.guild_id);
            t = j.intl.formatToPlainString(j.t["2KzH89"], { num: null != e[n.id] ? e[n.id].length : 0 });
        } else
            t =
                null != e
                    ? j.intl.formatToPlainString(j.t.L1zJgb, { categoryName: (0, d.F6)(e, x.default, m.Z) })
                    : j.intl.string(j.t.uIzfCE);
        return (0, i.jsxs)(u.Z, {
            grow: 1,
            className: f.nameContainer,
            children: [
                null != s ? (0, i.jsx)(s, { className: f.icon }) : null,
                (0, i.jsxs)("div", {
                    className: f.channelNameContainer,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            className: f.channelName,
                            children: (0, d.F6)(n, x.default, m.Z),
                        }),
                        (0, i.jsx)(r.Text, {
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
        return (0, i.jsxs)(u.Z, {
            grow: 0,
            shrink: 0,
            className: f.checkboxGroup,
            justify: u.Z.Justify.AROUND,
            align: u.Z.Align.CENTER,
            children: [
                (0, i.jsx)(u.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? f.checkboxContainerMuted : f.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(v.bL.ALL_MESSAGES),
                }),
                (0, i.jsx)(u.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? f.checkboxContainerMuted : f.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(v.bL.ONLY_MENTIONS),
                }),
                (0, i.jsx)(u.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: t ? f.checkboxContainerMuted : f.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(v.bL.NO_MESSAGES),
                }),
                (0, i.jsx)(u.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: f.checkboxMute,
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
            className: e ? f.overrideHighlight : f.override,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, i.jsx)(o.Z, {
                    className: f.removeOverride,
                    onClick: this.handleDelete,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            N(this, "_timeout", void 0),
            N(this, "contentDomRef", s.createRef()),
            N(this, "state", { highlight: !1 }),
            N(this, "unhighlight", () => {
                this.setState({ highlight: !1 });
            }),
            N(this, "handleMute", (e, t) => {
                let { messageNotifications: n } = this.props;
                this.setMessageNotification(null != n ? n : v.bL.NULL, t, p.UE.muted(t));
            }),
            N(this, "handleDelete", () => {
                let { onDelete: e, channel: t } = this.props;
                this.setMessageNotification(v.bL.NULL, !1, p.ZB.OverrideDeleted), null != e && e(t.id);
            });
    }
}
