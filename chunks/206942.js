n.d(t, { ZP: () => T }), n(415506), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(292556),
    s = n(734934),
    u = n(509613),
    c = n(460181),
    d = n(292959),
    _ = n(869235),
    E = n(388032),
    N = n(649926);
let g = r.createContext(void 0);
function O(e) {
    let { sound: t } = e,
        { handlePreviewSound: n } = (function () {
            let e = r.useContext(g);
            if (null == e) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
            return e;
        })();
    return (0, i.jsx)(o.P3F, {
        className: N.soundIcon,
        onClick: (e) => n(t, e),
        "aria-label": E.intl.string(E.t.Kd4uxM),
        children: (0, i.jsx)(o.gj8, {
            size: "xs",
            color: "currentColor",
            className: N.icon,
            "aria-hidden": !0,
        }),
    });
}
let I = [
        {
            useLabel: () => E.intl.string(E.t.jD1qzM),
            sound: "message1",
            useDisabled: s.p,
            useTooltip: () => ((0, s.p)() ? E.intl.string(E.t.cIRG0t) : void 0),
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
        node: (0, u.qs)("".concat(_.t.SOUNDS_LIST_ITEM_PREFIX).concat(e.sound), {
            useTitle: () => {
                let t = e.useLabel();
                return (0, i.jsxs)("div", {
                    className: N.soundRow,
                    children: [(0, i.jsx)("span", { children: t }), (0, i.jsx)(O, { sound: e.sound })],
                });
            },
            useValue: () => {
                var t;
                let n = (0, l.e7)([d.Z], () => d.Z.isSoundDisabled(e.sound)),
                    i = null == (t = e.useDisabled) ? void 0 : t.call(e);
                return !n && !i;
            },
            setValue: (t) => {
                let n = d.Z.getDisabledSounds().filter((t) => t !== e.sound);
                t || n.push(e.sound), a.default.setDisabledSounds(n);
            },
            useDisabled: () => {
                var t;
                let n = null == (t = e.useDisabled) ? void 0 : t.call(e),
                    i = (0, l.e7)([d.Z], () => d.Z.getDisableAllSounds());
                return n || i;
            },
            useTooltip: e.useTooltip,
        }),
    })),
    f = (0, u.qs)(_.t.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => E.intl.string(E.t.TzjwV1),
        useValue: () => (0, l.e7)([d.Z], () => d.Z.getNotifyMessagesInSelectedChannel()),
        setValue: (e) => a.default.setNotifyMessagesInSelectedChannel(e),
    }),
    A = (0, u.qs)(_.t.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => E.intl.string(E.t["2ZhCOT"]),
        useSubtitle: () => E.intl.string(E.t["+B0XLC"]),
        useValue: () => (0, l.e7)([d.Z], () => d.Z.getDisableAllSounds()),
        setValue: (e) => a.default.toggleDisableAllSounds(e),
    }),
    T = (0, u.$l)(_.t.NOTIFICATION_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? E.intl.formatToPlainString(E.t["0JYT9/"], { count: t })
                : E.intl.formatToPlainString(E.t.ji1uNj, { count: t }),
        ContextProvider: function (e) {
            let { children: t } = e,
                n = r.useRef(null),
                l = r.useCallback((e, t) => {
                    t.stopPropagation(),
                        t.preventDefault(),
                        null != n.current && n.current.stop(),
                        (n.current = (0, c.GN)(e));
                }, []);
            r.useEffect(
                () => () => {
                    var e;
                    null == (e = n.current) || e.stop();
                },
                [],
            );
            let o = r.useMemo(() => ({ handlePreviewSound: l }), [l]);
            return (0, i.jsx)(g.Provider, {
                value: o,
                children: t,
            });
        },
        getLayout: () => [I[0].node, f, I[1].node, A, ...I.slice(2).map((e) => e.node)],
    });
