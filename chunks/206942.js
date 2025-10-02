n.d(t, { ZP: () => f }), n(415506), n(539854), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(442837);
n(481060);
var u = n(292556),
    s = n(734934),
    a = n(509613),
    o = n(460181),
    c = n(292959),
    d = n(313789),
    E = n(388032);
n(453934);
let O = l.createContext(void 0),
    T = [
        {
            useLabel: () => E.intl.string(E.t.jD1qzM),
            sound: "message1",
            useDisabled: s.p,
            useDisabledMessage: () => ((0, s.p)() ? E.intl.string(E.t.cIRG0t) : void 0),
        },
        {
            useLabel: () => E.intl.string(E.t.XBrJT0),
            sound: "call_ringing",
        },
        {
            useLabel: () => E.intl.string(E.t.hK51Ym),
            sound: "deafen",
        },
        {
            useLabel: () => E.intl.string(E.t.XiejaG),
            sound: "undeafen",
        },
        {
            useLabel: () => E.intl.string(E.t["w4m94+"]),
            sound: "mute",
        },
        {
            useLabel: () => E.intl.string(E.t.YqAjX1),
            sound: "unmute",
        },
        {
            useLabel: () => E.intl.string(E.t.JoTq8v),
            sound: "camera_on",
        },
        {
            useLabel: () => E.intl.string(E.t["8P6tQ0"]),
            sound: "camera_off",
        },
        {
            useLabel: () => E.intl.string(E.t["juL9/P"]),
            sound: "disconnect",
        },
        {
            useLabel: () => E.intl.string(E.t.x98vQk),
            sound: "ptt_start",
        },
        {
            useLabel: () => E.intl.string(E.t["1HjRqK"]),
            sound: "ptt_stop",
        },
        {
            useLabel: () => E.intl.string(E.t["9JB1Cg"]),
            sound: "user_join",
        },
        {
            useLabel: () => E.intl.string(E.t.KUBBNj),
            sound: "user_leave",
        },
        {
            useLabel: () => E.intl.string(E.t.EZjqUV),
            sound: "user_moved",
        },
        {
            useLabel: () => E.intl.string(E.t.LnNlQk),
            sound: "call_calling",
        },
        {
            useLabel: () => E.intl.string(E.t["Nd8P5+"]),
            sound: "stream_started",
        },
        {
            useLabel: () => E.intl.string(E.t["9bYj+P"]),
            sound: "stream_ended",
        },
        {
            useLabel: () => E.intl.string(E.t.KccUIy),
            sound: "stream_user_joined",
        },
        {
            useLabel: () => E.intl.string(E.t.dsjkiI),
            sound: "stream_user_left",
        },
        {
            useLabel: () => E.intl.string(E.t.nFOcf3),
            sound: "activity_launch",
        },
        {
            useLabel: () => E.intl.string(E.t["a6lw/v"]),
            sound: "activity_end",
        },
        {
            useLabel: () => E.intl.string(E.t.KaFxra),
            sound: "activity_user_join",
        },
        {
            useLabel: () => E.intl.string(E.t.S14z9v),
            sound: "activity_user_left",
        },
        {
            useLabel: () => E.intl.string(E.t.CP3DCw),
            sound: "reconnect",
        },
    ].map((e) => ({
        node: (0, a.qs)("".concat(d.n.SOUNDS_LIST_ITEM_PREFIX).concat(e.sound), {
            useTitle: e.useLabel,
            useSubtitle: () =>
                E.intl.format(E.t.OOiGCA, {
                    onClick: () => {
                        (0, o.GN)(e.sound);
                    },
                }),
            useValue: () => {
                var t;
                let n = (0, r.e7)([c.Z], () => c.Z.isSoundDisabled(e.sound)),
                    i = null == (t = e.useDisabled) ? void 0 : t.call(e);
                return !n && !i;
            },
            setValue: (t) => {
                let n = c.Z.getDisabledSounds().filter((t) => t !== e.sound);
                t || n.push(e.sound), u.default.setDisabledSounds(n);
            },
            useDisabled: () => {
                var t;
                let n = null == (t = e.useDisabled) ? void 0 : t.call(e),
                    i = (0, r.e7)([c.Z], () => c.Z.getDisableAllSounds());
                return n || i;
            },
            useDisabledMessage: e.useDisabledMessage,
        }),
    })),
    y = (0, a.qs)(d.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => E.intl.string(E.t.TzjwV1),
        useValue: () => (0, r.e7)([c.Z], () => c.Z.getNotifyMessagesInSelectedChannel()),
        setValue: (e) => u.default.setNotifyMessagesInSelectedChannel(e),
    }),
    N = (0, a.qs)(d.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => E.intl.string(E.t["2ZhCOT"]),
        useSubtitle: () => E.intl.string(E.t["+B0XLC"]),
        useValue: () => (0, r.e7)([c.Z], () => c.Z.getDisableAllSounds()),
        setValue: (e) => u.default.toggleDisableAllSounds(e),
    }),
    f = (0, a.$l)(d.n.NOTIFICATION_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? E.intl.formatToPlainString(E.t["0JYT9/"], { count: t })
                : E.intl.formatToPlainString(E.t.ji1uNj, { count: t }),
        ContextProvider: function (e) {
            let { children: t } = e,
                n = l.useRef(null),
                r = l.useCallback((e, t) => {
                    t.stopPropagation(),
                        t.preventDefault(),
                        null != n.current && n.current.stop(),
                        (n.current = (0, o.GN)(e));
                }, []);
            l.useEffect(
                () => () => {
                    var e;
                    null == (e = n.current) || e.stop();
                },
                [],
            );
            let u = l.useMemo(() => ({ handlePreviewSound: r }), [r]);
            return (0, i.jsx)(O.Provider, {
                value: u,
                children: t,
            });
        },
        buildLayout: () => [T[0].node, y, T[1].node, N, ...T.slice(2).map((e) => e.node)],
    });
