n.d(e, { ZP: () => S }), n(415506), n(539854), n(388685);
var i = n(951288),
    l = n(647438),
    u = n(442837);
n(481060);
var r = n(292556),
    s = n(734934),
    a = n(509613),
    o = n(460181),
    c = n(292959),
    E = n(313789),
    d = n(388032);
n(649926);
let T = l.createContext(void 0),
    I = [
        {
            useLabel: () => d.intl.string(d.t.jD1qzM),
            sound: "message1",
            useDisabled: s.p,
            useDisabledMessage: () => ((0, s.p)() ? d.intl.string(d.t.cIRG0t) : void 0),
        },
        {
            useLabel: () => d.intl.string(d.t.XBrJT0),
            sound: "call_ringing",
        },
        {
            useLabel: () => d.intl.string(d.t.hK51Ym),
            sound: "deafen",
        },
        {
            useLabel: () => d.intl.string(d.t.XiejaG),
            sound: "undeafen",
        },
        {
            useLabel: () => d.intl.string(d.t["w4m94+"]),
            sound: "mute",
        },
        {
            useLabel: () => d.intl.string(d.t.YqAjX1),
            sound: "unmute",
        },
        {
            useLabel: () => d.intl.string(d.t.JoTq8v),
            sound: "camera_on",
        },
        {
            useLabel: () => d.intl.string(d.t["8P6tQ0"]),
            sound: "camera_off",
        },
        {
            useLabel: () => d.intl.string(d.t["juL9/P"]),
            sound: "disconnect",
        },
        {
            useLabel: () => d.intl.string(d.t.x98vQk),
            sound: "ptt_start",
        },
        {
            useLabel: () => d.intl.string(d.t["1HjRqK"]),
            sound: "ptt_stop",
        },
        {
            useLabel: () => d.intl.string(d.t["9JB1Cg"]),
            sound: "user_join",
        },
        {
            useLabel: () => d.intl.string(d.t.KUBBNj),
            sound: "user_leave",
        },
        {
            useLabel: () => d.intl.string(d.t.EZjqUV),
            sound: "user_moved",
        },
        {
            useLabel: () => d.intl.string(d.t.LnNlQk),
            sound: "call_calling",
        },
        {
            useLabel: () => d.intl.string(d.t["Nd8P5+"]),
            sound: "stream_started",
        },
        {
            useLabel: () => d.intl.string(d.t["9bYj+P"]),
            sound: "stream_ended",
        },
        {
            useLabel: () => d.intl.string(d.t.KccUIy),
            sound: "stream_user_joined",
        },
        {
            useLabel: () => d.intl.string(d.t.dsjkiI),
            sound: "stream_user_left",
        },
        {
            useLabel: () => d.intl.string(d.t.nFOcf3),
            sound: "activity_launch",
        },
        {
            useLabel: () => d.intl.string(d.t["a6lw/v"]),
            sound: "activity_end",
        },
        {
            useLabel: () => d.intl.string(d.t.KaFxra),
            sound: "activity_user_join",
        },
        {
            useLabel: () => d.intl.string(d.t.S14z9v),
            sound: "activity_user_left",
        },
        {
            useLabel: () => d.intl.string(d.t.CP3DCw),
            sound: "reconnect",
        },
    ].map((t) => ({
        node: (0, a.qs)("".concat(E.n.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
            useTitle: t.useLabel,
            useSubtitle: () =>
                d.intl.format(d.t.OOiGCA, {
                    onClick: () => {
                        (0, o.GN)(t.sound);
                    },
                }),
            useValue: () => {
                var e;
                let n = (0, u.e7)([c.Z], () => c.Z.isSoundDisabled(t.sound)),
                    i = null == (e = t.useDisabled) ? void 0 : e.call(t);
                return !n && !i;
            },
            setValue: (e) => {
                let n = c.Z.getDisabledSounds().filter((e) => e !== t.sound);
                e || n.push(t.sound), r.default.setDisabledSounds(n);
            },
            useDisabled: () => {
                var e;
                let n = null == (e = t.useDisabled) ? void 0 : e.call(t),
                    i = (0, u.e7)([c.Z], () => c.Z.getDisableAllSounds());
                return n || i;
            },
            useDisabledMessage: t.useDisabledMessage,
        }),
    })),
    O = (0, a.qs)(E.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => d.intl.string(d.t.TzjwV1),
        useValue: () => (0, u.e7)([c.Z], () => c.Z.getNotifyMessagesInSelectedChannel()),
        setValue: (t) => r.default.setNotifyMessagesInSelectedChannel(t),
    }),
    A = (0, a.qs)(E.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => d.intl.string(d.t["2ZhCOT"]),
        useSubtitle: () => d.intl.string(d.t["+B0XLC"]),
        useValue: () => (0, u.e7)([c.Z], () => c.Z.getDisableAllSounds()),
        setValue: (t) => r.default.toggleDisableAllSounds(t),
    }),
    S = (0, a.$l)(E.n.NOTIFICATION_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (t, e) =>
            t
                ? d.intl.formatToPlainString(d.t["0JYT9/"], { count: e })
                : d.intl.formatToPlainString(d.t.ji1uNj, { count: e }),
        ContextProvider: function (t) {
            let { children: e } = t,
                n = l.useRef(null),
                u = l.useCallback((t, e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != n.current && n.current.stop(),
                        (n.current = (0, o.GN)(t));
                }, []);
            l.useEffect(
                () => () => {
                    var t;
                    null == (t = n.current) || t.stop();
                },
                [],
            );
            let r = l.useMemo(() => ({ handlePreviewSound: u }), [u]);
            return (0, i.jsx)(T.Provider, {
                value: r,
                children: e,
            });
        },
        buildLayout: () => [I[0].node, O, I[1].node, A, ...I.slice(2).map((t) => t.node)],
    });
