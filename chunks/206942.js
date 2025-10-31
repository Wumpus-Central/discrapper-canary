n.d(e, { ZP: () => I }), n(415506), n(539854), n(388685);
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
n(649926);
let O = l.createContext(void 0),
    T = [
        {
            useLabel: () => E.intl.string(E.t.jD1qzM),
            sound: "message1",
            useDisabled: s.p,
            useDisabledMessage: () => ((0, s.p)() ? E.intl.string(E.t.cIRG0s) : void 0),
        },
        {
            useLabel: () => E.intl.string(E.t.XBrJT6),
            sound: "call_ringing",
        },
        {
            useLabel: () => E.intl.string(E.t.hK51Yg),
            sound: "deafen",
        },
        {
            useLabel: () => E.intl.string(E.t.XiejaJ),
            sound: "undeafen",
        },
        {
            useLabel: () => E.intl.string(E.t.w4m945),
            sound: "mute",
        },
        {
            useLabel: () => E.intl.string(E.t.YqAjXy),
            sound: "unmute",
        },
        {
            useLabel: () => E.intl.string(E.t.JoTq8n),
            sound: "camera_on",
        },
        {
            useLabel: () => E.intl.string(E.t["8P6tQ6"]),
            sound: "camera_off",
        },
        {
            useLabel: () => E.intl.string(E.t["juL9/L"]),
            sound: "disconnect",
        },
        {
            useLabel: () => E.intl.string(E.t.x98vQq),
            sound: "ptt_start",
        },
        {
            useLabel: () => E.intl.string(E.t["1HjRqC"]),
            sound: "ptt_stop",
        },
        {
            useLabel: () => E.intl.string(E.t["9JB1Ck"]),
            sound: "user_join",
        },
        {
            useLabel: () => E.intl.string(E.t.KUBBNt),
            sound: "user_leave",
        },
        {
            useLabel: () => E.intl.string(E.t.EZjqUT),
            sound: "user_moved",
        },
        {
            useLabel: () => E.intl.string(E.t.LnNlQh),
            sound: "call_calling",
        },
        {
            useLabel: () => E.intl.string(E.t.Nd8P5y),
            sound: "stream_started",
        },
        {
            useLabel: () => E.intl.string(E.t["9bYj+G"]),
            sound: "stream_ended",
        },
        {
            useLabel: () => E.intl.string(E.t.KccUI1),
            sound: "stream_user_joined",
        },
        {
            useLabel: () => E.intl.string(E.t.dsjkiN),
            sound: "stream_user_left",
        },
        {
            useLabel: () => E.intl.string(E.t.nFOcf9),
            sound: "activity_launch",
        },
        {
            useLabel: () => E.intl.string(E.t["a6lw/u"]),
            sound: "activity_end",
        },
        {
            useLabel: () => E.intl.string(E.t.KaFxrY),
            sound: "activity_user_join",
        },
        {
            useLabel: () => E.intl.string(E.t.S14z9n),
            sound: "activity_user_left",
        },
        {
            useLabel: () => E.intl.string(E.t.CP3DC3),
            sound: "reconnect",
        },
    ].map((t) => ({
        node: (0, a.qs)("".concat(d.n.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
            useTitle: t.useLabel,
            useSubtitle: () =>
                E.intl.format(E.t.OOiGCM, {
                    onClick: () => {
                        (0, o.GN)(t.sound);
                    },
                }),
            useValue: () => {
                var e;
                let n = (0, r.e7)([c.Z], () => c.Z.isSoundDisabled(t.sound)),
                    i = null == (e = t.useDisabled) ? void 0 : e.call(t);
                return !n && !i;
            },
            setValue: (e) => {
                let n = c.Z.getDisabledSounds().filter((e) => e !== t.sound);
                e || n.push(t.sound), u.default.setDisabledSounds(n);
            },
            useDisabled: () => {
                var e;
                let n = null == (e = t.useDisabled) ? void 0 : e.call(t),
                    i = (0, r.e7)([c.Z], () => c.Z.getDisableAllSounds());
                return n || i;
            },
            useDisabledMessage: t.useDisabledMessage,
        }),
    })),
    S = (0, a.qs)(d.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => E.intl.string(E.t.TzjwV9),
        useValue: () => (0, r.e7)([c.Z], () => c.Z.getNotifyMessagesInSelectedChannel()),
        setValue: (t) => u.default.setNotifyMessagesInSelectedChannel(t),
    }),
    g = (0, a.qs)(d.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => E.intl.string(E.t["2ZhCOd"]),
        useSubtitle: () => E.intl.string(E.t["+B0XLE"]),
        useValue: () => (0, r.e7)([c.Z], () => c.Z.getDisableAllSounds()),
        setValue: (t) => u.default.toggleDisableAllSounds(t),
    }),
    I = (0, a.$l)(d.n.NOTIFICATION_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (t, e) =>
            t
                ? E.intl.formatToPlainString(E.t["0JYT98"], { count: e })
                : E.intl.formatToPlainString(E.t.ji1uNt, { count: e }),
        ContextProvider: function (t) {
            let { children: e } = t,
                n = l.useRef(null),
                r = l.useCallback((t, e) => {
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
            let u = l.useMemo(() => ({ handlePreviewSound: r }), [r]);
            return (0, i.jsx)(O.Provider, {
                value: u,
                children: e,
            });
        },
        buildLayout: () => [T[0].node, S, T[1].node, g, ...T.slice(2).map((t) => t.node)],
    });
