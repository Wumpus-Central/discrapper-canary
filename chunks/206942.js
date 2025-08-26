n.d(t, { ZP: () => v }), n(415506), n(539854), n(388685);
var l = n(951288),
    i = n(647438),
    r = n(442837),
    s = n(481060),
    a = n(292556),
    o = n(734934),
    u = n(509613),
    c = n(460181),
    d = n(292959),
    T = n(869235),
    O = n(388032),
    f = n(649926);
let N = i.createContext(void 0);
function I(e) {
    let { sound: t } = e,
        { handlePreviewSound: n } = (function () {
            let e = i.useContext(N);
            if (null == e) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
            return e;
        })();
    return (0, l.jsx)(s.P3F, {
        className: f.soundIcon,
        onClick: (e) => n(t, e),
        "aria-label": O.intl.string(O.t.Kd4uxM),
        children: (0, l.jsx)(s.gj8, {
            size: "xs",
            color: "currentColor",
            className: f.icon,
            "aria-hidden": !0,
        }),
    });
}
let E = [
        {
            useLabel: () => O.intl.string(O.t.jD1qzM),
            sound: "message1",
            useDisabled: o.p,
            useTooltip: () => ((0, o.p)() ? O.intl.string(O.t.cIRG0t) : void 0),
        },
        {
            useLabel: () => O.intl.string(O.t.XBrJT0),
            sound: "call_ringing",
        },
        {
            useLabel: () => O.intl.string(O.t.hK51Ym),
            sound: "deafen",
        },
        {
            useLabel: () => O.intl.string(O.t.XiejaG),
            sound: "undeafen",
        },
        {
            useLabel: () => O.intl.string(O.t["w4m94+"]),
            sound: "mute",
        },
        {
            useLabel: () => O.intl.string(O.t.YqAjX1),
            sound: "unmute",
        },
        {
            useLabel: () => O.intl.string(O.t.JoTq8v),
            sound: "camera_on",
        },
        {
            useLabel: () => O.intl.string(O.t["8P6tQ0"]),
            sound: "camera_off",
        },
        {
            useLabel: () => O.intl.string(O.t["juL9/P"]),
            sound: "disconnect",
        },
        {
            useLabel: () => O.intl.string(O.t.x98vQk),
            sound: "ptt_start",
        },
        {
            useLabel: () => O.intl.string(O.t["1HjRqK"]),
            sound: "ptt_stop",
        },
        {
            useLabel: () => O.intl.string(O.t["9JB1Cg"]),
            sound: "user_join",
        },
        {
            useLabel: () => O.intl.string(O.t.KUBBNj),
            sound: "user_leave",
        },
        {
            useLabel: () => O.intl.string(O.t.EZjqUV),
            sound: "user_moved",
        },
        {
            useLabel: () => O.intl.string(O.t.LnNlQk),
            sound: "call_calling",
        },
        {
            useLabel: () => O.intl.string(O.t["Nd8P5+"]),
            sound: "stream_started",
        },
        {
            useLabel: () => O.intl.string(O.t["9bYj+P"]),
            sound: "stream_ended",
        },
        {
            useLabel: () => O.intl.string(O.t.KccUIy),
            sound: "stream_user_joined",
        },
        {
            useLabel: () => O.intl.string(O.t.dsjkiI),
            sound: "stream_user_left",
        },
        {
            useLabel: () => O.intl.string(O.t.nFOcf3),
            sound: "activity_launch",
        },
        {
            useLabel: () => O.intl.string(O.t["a6lw/v"]),
            sound: "activity_end",
        },
        {
            useLabel: () => O.intl.string(O.t.KaFxra),
            sound: "activity_user_join",
        },
        {
            useLabel: () => O.intl.string(O.t.S14z9v),
            sound: "activity_user_left",
        },
        {
            useLabel: () => O.intl.string(O.t.CP3DCw),
            sound: "reconnect",
        },
    ].map((e) => ({
        node: (0, u.qs)("".concat(T.t.SOUNDS_LIST_ITEM_PREFIX).concat(e.sound), {
            useTitle: () => {
                let t = e.useLabel();
                return (0, l.jsxs)("div", {
                    className: f.soundRow,
                    children: [(0, l.jsx)("span", { children: t }), (0, l.jsx)(I, { sound: e.sound })],
                });
            },
            useValue: () => {
                var t;
                let n = (0, r.e7)([d.Z], () => d.Z.isSoundDisabled(e.sound)),
                    l = null == (t = e.useDisabled) ? void 0 : t.call(e);
                return !n && !l;
            },
            setValue: (t) => {
                let n = d.Z.getDisabledSounds().filter((t) => t !== e.sound);
                t || n.push(e.sound), a.default.setDisabledSounds(n);
            },
            useDisabled: () => {
                var t;
                let n = null == (t = e.useDisabled) ? void 0 : t.call(e),
                    l = (0, r.e7)([d.Z], () => d.Z.getDisableAllSounds());
                return n || l;
            },
            useTooltip: e.useTooltip,
        }),
    })),
    g = (0, u.qs)(T.t.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => O.intl.string(O.t.TzjwV1),
        useValue: () => (0, r.e7)([d.Z], () => d.Z.getNotifyMessagesInSelectedChannel()),
        setValue: (e) => a.default.setNotifyMessagesInSelectedChannel(e),
    }),
    _ = (0, u.qs)(T.t.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => O.intl.string(O.t["2ZhCOT"]),
        useSubtitle: () => O.intl.string(O.t["+B0XLC"]),
        useValue: () => (0, r.e7)([d.Z], () => d.Z.getDisableAllSounds()),
        setValue: (e) => a.default.toggleDisableAllSounds(e),
    }),
    v = (0, u.$l)(T.t.NOTIFICATION_SOUNDS_SETTINGS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? O.intl.formatToPlainString(O.t["0JYT9/"], { count: t })
                : O.intl.formatToPlainString(O.t.ji1uNj, { count: t }),
        ContextProvider: function (e) {
            let { children: t } = e,
                n = i.useRef(null),
                r = i.useCallback((e, t) => {
                    t.stopPropagation(),
                        t.preventDefault(),
                        null != n.current && n.current.stop(),
                        (n.current = (0, c.GN)(e));
                }, []);
            i.useEffect(
                () => () => {
                    var e;
                    null == (e = n.current) || e.stop();
                },
                [],
            );
            let s = i.useMemo(() => ({ handlePreviewSound: r }), [r]);
            return (0, l.jsx)(N.Provider, {
                value: s,
                children: t,
            });
        },
        getLayout: () => [E[0].node, g, E[1].node, _, ...E.slice(2).map((e) => e.node)],
    });
