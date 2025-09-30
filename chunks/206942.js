n.d(t, { ZP: () => T }), n(415506), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    s = n(292556),
    a = n(734934),
    u = n(509613),
    c = n(460181),
    d = n(292959),
    f = n(313789),
    b = n(388032),
    y = n(649926);
let O = i.createContext(void 0);
function g(e) {
    let { sound: t } = e,
        { handlePreviewSound: n } = (function () {
            let e = i.useContext(O);
            if (null == e) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
            return e;
        })();
    return (0, r.jsx)(o.P3F, {
        className: y.soundIcon,
        onClick: (e) => n(t, e),
        "aria-label": b.intl.string(b.t.Kd4uxM),
        children: (0, r.jsx)(o.gj8, {
            size: "xs",
            color: "currentColor",
            className: y.icon,
            "aria-hidden": !0,
        }),
    });
}
let E = [
        {
            useLabel: () => b.intl.string(b.t.jD1qzM),
            sound: "message1",
            useDisabled: a.p,
            useTooltip: () => ((0, a.p)() ? b.intl.string(b.t.cIRG0t) : void 0),
        },
        {
            useLabel: () => b.intl.string(b.t.XBrJT0),
            sound: "call_ringing",
        },
        {
            useLabel: () => b.intl.string(b.t.hK51Ym),
            sound: "deafen",
        },
        {
            useLabel: () => b.intl.string(b.t.XiejaG),
            sound: "undeafen",
        },
        {
            useLabel: () => b.intl.string(b.t["w4m94+"]),
            sound: "mute",
        },
        {
            useLabel: () => b.intl.string(b.t.YqAjX1),
            sound: "unmute",
        },
        {
            useLabel: () => b.intl.string(b.t.JoTq8v),
            sound: "camera_on",
        },
        {
            useLabel: () => b.intl.string(b.t["8P6tQ0"]),
            sound: "camera_off",
        },
        {
            useLabel: () => b.intl.string(b.t["juL9/P"]),
            sound: "disconnect",
        },
        {
            useLabel: () => b.intl.string(b.t.x98vQk),
            sound: "ptt_start",
        },
        {
            useLabel: () => b.intl.string(b.t["1HjRqK"]),
            sound: "ptt_stop",
        },
        {
            useLabel: () => b.intl.string(b.t["9JB1Cg"]),
            sound: "user_join",
        },
        {
            useLabel: () => b.intl.string(b.t.KUBBNj),
            sound: "user_leave",
        },
        {
            useLabel: () => b.intl.string(b.t.EZjqUV),
            sound: "user_moved",
        },
        {
            useLabel: () => b.intl.string(b.t.LnNlQk),
            sound: "call_calling",
        },
        {
            useLabel: () => b.intl.string(b.t["Nd8P5+"]),
            sound: "stream_started",
        },
        {
            useLabel: () => b.intl.string(b.t["9bYj+P"]),
            sound: "stream_ended",
        },
        {
            useLabel: () => b.intl.string(b.t.KccUIy),
            sound: "stream_user_joined",
        },
        {
            useLabel: () => b.intl.string(b.t.dsjkiI),
            sound: "stream_user_left",
        },
        {
            useLabel: () => b.intl.string(b.t.nFOcf3),
            sound: "activity_launch",
        },
        {
            useLabel: () => b.intl.string(b.t["a6lw/v"]),
            sound: "activity_end",
        },
        {
            useLabel: () => b.intl.string(b.t.KaFxra),
            sound: "activity_user_join",
        },
        {
            useLabel: () => b.intl.string(b.t.S14z9v),
            sound: "activity_user_left",
        },
        {
            useLabel: () => b.intl.string(b.t.CP3DCw),
            sound: "reconnect",
        },
    ].map((e) => ({
        node: (0, u.qs)("".concat(f.n.SOUNDS_LIST_ITEM_PREFIX).concat(e.sound), {
            useTitle: () => {
                let t = e.useLabel();
                return (0, r.jsxs)("div", {
                    className: y.soundRow,
                    children: [(0, r.jsx)("span", { children: t }), (0, r.jsx)(g, { sound: e.sound })],
                });
            },
            useValue: () => {
                var t;
                let n = (0, l.e7)([d.Z], () => d.Z.isSoundDisabled(e.sound)),
                    r = null == (t = e.useDisabled) ? void 0 : t.call(e);
                return !n && !r;
            },
            setValue: (t) => {
                let n = d.Z.getDisabledSounds().filter((t) => t !== e.sound);
                t || n.push(e.sound), s.default.setDisabledSounds(n);
            },
            useDisabled: () => {
                var t;
                let n = null == (t = e.useDisabled) ? void 0 : t.call(e),
                    r = (0, l.e7)([d.Z], () => d.Z.getDisableAllSounds());
                return n || r;
            },
            useTooltip: e.useTooltip,
        }),
    })),
    p = (0, u.qs)(f.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => b.intl.string(b.t.TzjwV1),
        useValue: () => (0, l.e7)([d.Z], () => d.Z.getNotifyMessagesInSelectedChannel()),
        setValue: (e) => s.default.setNotifyMessagesInSelectedChannel(e),
    }),
    v = (0, u.qs)(f.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => b.intl.string(b.t["2ZhCOT"]),
        useSubtitle: () => b.intl.string(b.t["+B0XLC"]),
        useValue: () => (0, l.e7)([d.Z], () => d.Z.getDisableAllSounds()),
        setValue: (e) => s.default.toggleDisableAllSounds(e),
    }),
    T = (0, u.$l)(f.n.NOTIFICATION_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? b.intl.formatToPlainString(b.t["0JYT9/"], { count: t })
                : b.intl.formatToPlainString(b.t.ji1uNj, { count: t }),
        ContextProvider: function (e) {
            let { children: t } = e,
                n = i.useRef(null),
                l = i.useCallback((e, t) => {
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
            let o = i.useMemo(() => ({ handlePreviewSound: l }), [l]);
            return (0, r.jsx)(O.Provider, {
                value: o,
                children: t,
            });
        },
        buildLayout: () => [E[0].node, p, E[1].node, v, ...E.slice(2).map((e) => e.node)],
    });
