n.d(t, { ZP: () => j }), n(415506), n(539854), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(442837),
    o = n(481060),
    s = n(292556),
    a = n(734934),
    u = n(509613),
    c = n(460181),
    d = n(292959),
    f = n(388032),
    g = n(881449);
let v = l.createContext(void 0);
function b(e) {
    let { sound: t } = e,
        { handlePreviewSound: n } = (function () {
            let e = l.useContext(v);
            if (null == e) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
            return e;
        })();
    return (0, i.jsx)(o.P3F, {
        className: g.soundIcon,
        onClick: (e) => n(t, e),
        "aria-label": f.intl.string(f.t.Kd4uxM),
        children: (0, i.jsx)(o.gj8, {
            size: "xs",
            color: "currentColor",
            className: g.icon,
            "aria-hidden": !0,
        }),
    });
}
let m = [
        {
            useLabel: () => f.intl.string(f.t.jD1qzM),
            sound: "message1",
            useDisabled: a.p,
            useTooltip: () => ((0, a.p)() ? f.intl.string(f.t.cIRG0t) : void 0),
        },
        {
            useLabel: () => f.intl.string(f.t.XBrJT0),
            sound: "call_ringing",
        },
        {
            useLabel: () => f.intl.string(f.t.hK51Ym),
            sound: "deafen",
        },
        {
            useLabel: () => f.intl.string(f.t.XiejaG),
            sound: "undeafen",
        },
        {
            useLabel: () => f.intl.string(f.t["w4m94+"]),
            sound: "mute",
        },
        {
            useLabel: () => f.intl.string(f.t.YqAjX1),
            sound: "unmute",
        },
        {
            useLabel: () => f.intl.string(f.t.JoTq8v),
            sound: "camera_on",
        },
        {
            useLabel: () => f.intl.string(f.t["8P6tQ0"]),
            sound: "camera_off",
        },
        {
            useLabel: () => f.intl.string(f.t["juL9/P"]),
            sound: "disconnect",
        },
        {
            useLabel: () => f.intl.string(f.t.x98vQk),
            sound: "ptt_start",
        },
        {
            useLabel: () => f.intl.string(f.t["1HjRqK"]),
            sound: "ptt_stop",
        },
        {
            useLabel: () => f.intl.string(f.t["9JB1Cg"]),
            sound: "user_join",
        },
        {
            useLabel: () => f.intl.string(f.t.KUBBNj),
            sound: "user_leave",
        },
        {
            useLabel: () => f.intl.string(f.t.EZjqUV),
            sound: "user_moved",
        },
        {
            useLabel: () => f.intl.string(f.t.LnNlQk),
            sound: "call_calling",
        },
        {
            useLabel: () => f.intl.string(f.t["Nd8P5+"]),
            sound: "stream_started",
        },
        {
            useLabel: () => f.intl.string(f.t["9bYj+P"]),
            sound: "stream_ended",
        },
        {
            useLabel: () => f.intl.string(f.t.KccUIy),
            sound: "stream_user_joined",
        },
        {
            useLabel: () => f.intl.string(f.t.dsjkiI),
            sound: "stream_user_left",
        },
        {
            useLabel: () => f.intl.string(f.t.nFOcf3),
            sound: "activity_launch",
        },
        {
            useLabel: () => f.intl.string(f.t["a6lw/v"]),
            sound: "activity_end",
        },
        {
            useLabel: () => f.intl.string(f.t.KaFxra),
            sound: "activity_user_join",
        },
        {
            useLabel: () => f.intl.string(f.t.S14z9v),
            sound: "activity_user_left",
        },
        {
            useLabel: () => f.intl.string(f.t.CP3DCw),
            sound: "reconnect",
        },
    ].map((e) => ({
        node: (0, u.qs)(e.sound, {
            useTitle: () => {
                let t = e.useLabel();
                return (0, i.jsxs)("div", {
                    className: g.soundRow,
                    children: [(0, i.jsx)("span", { children: t }), (0, i.jsx)(b, { sound: e.sound })],
                });
            },
            useValue: () => {
                var t;
                let n = (0, r.e7)([d.Z], () => d.Z.isSoundDisabled(e.sound)),
                    i = null == (t = e.useDisabled) ? void 0 : t.call(e);
                return !n && !i;
            },
            setValue: (t) => {
                let n = d.Z.getDisabledSounds().filter((t) => t !== e.sound);
                t || n.push(e.sound), s.default.setDisabledSounds(n);
            },
            useDisabled: () => {
                var t;
                let n = null == (t = e.useDisabled) ? void 0 : t.call(e),
                    i = (0, r.e7)([d.Z], () => d.Z.getDisableAllSounds());
                return n || i;
            },
            useTooltip: e.useTooltip,
        }),
    })),
    p = (0, u.qs)("SelectedChannelNotifications", {
        useTitle: () => f.intl.string(f.t.TzjwV1),
        useValue: () => (0, r.e7)([d.Z], () => d.Z.getNotifyMessagesInSelectedChannel()),
        setValue: (e) => s.default.setNotifyMessagesInSelectedChannel(e),
    }),
    x = (0, u.qs)("DisableAllNotificationSounds", {
        useTitle: () => f.intl.string(f.t["2ZhCOT"]),
        useSubtitle: () => f.intl.string(f.t["+B0XLC"]),
        useValue: () => (0, r.e7)([d.Z], () => d.Z.getDisableAllSounds()),
        setValue: (e) => s.default.toggleDisableAllSounds(e),
    }),
    j = (0, u.$l)("NotificationSoundsSettingList", {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? f.intl.formatToPlainString(f.t["0JYT9/"], { count: t })
                : f.intl.formatToPlainString(f.t.ji1uNj, { count: t }),
        ContextProvider: function (e) {
            let { children: t } = e,
                n = l.useRef(null),
                r = l.useCallback((e, t) => {
                    t.stopPropagation(),
                        t.preventDefault(),
                        null != n.current && n.current.stop(),
                        (n.current = (0, c.GN)(e));
                }, []);
            l.useEffect(
                () => () => {
                    var e;
                    null == (e = n.current) || e.stop();
                },
                [],
            );
            let o = l.useMemo(() => ({ handlePreviewSound: r }), [r]);
            return (0, i.jsx)(v.Provider, {
                value: o,
                children: t,
            });
        },
        getLayout: () => [m[0].node, p, m[1].node, x, ...m.slice(2).map((e) => e.node)],
    });
