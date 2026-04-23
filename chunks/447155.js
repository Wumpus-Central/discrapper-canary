n.d(t, { A: () => S, v: () => x }), n(321073);
var i,
    l = n(827734),
    a = n(81369),
    s = n(176781),
    r = n(523056),
    o = n(642846),
    c = n(323384),
    d = n(111219),
    u = n(835723),
    h = n(39623),
    m = n(406810),
    A = n(152367),
    g = n(833349),
    _ = n(47167),
    p = n(994500),
    f = n(287809),
    E = n(652215),
    C = n(985018),
    x =
        (((i = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE"),
        (i.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE"),
        (i.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME"),
        (i.INVITE_TO_LISTEN = "INVITE_TO_LISTEN"),
        (i.INVITE_TO_WATCH = "INVITE_TO_WATCH"),
        (i.CREATE_THREAD = "CREATE_THREAD"),
        (i.SLASH_COMMAND = "SLASH_COMMAND"),
        (i.CLIPS = "CLIPS"),
        (i.POLL = "POLL"),
        (i.ACTIVITY = "ACTIVITY"),
        (i.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE"),
        (i.SUMMARIZE_THREAD = "SUMMARIZE_THREAD"),
        i);
function S(e) {
    let {
            canAttachFiles: t,
            canStartThreads: n,
            useSlate: i,
            canUseApplicationCommands: x,
            hasClips: S,
            channel: I,
            activities: v,
            newClipsCount: N,
            canPostPolls: T,
            appContext: y,
            canSendScheduledMessages: b,
            canSummarizeThreads: j,
        } = e,
        R = [];
    return (
        t &&
            (R.push({ type: "UPLOAD_A_FILE", icon: a.H, display: C.intl.string(C.t["d3+iYs"]) }),
            R.push({ type: "UPLOAD_TEXT_AS_FILE", icon: a.H, display: C.intl.string(C.t["G9s+EM"]) })),
        S &&
            t &&
            y !== E.BRT.POPOUT &&
            R.push({
                type: "CLIPS",
                icon: s.x,
                display: C.intl.string(C.t.o034cv),
                badgeVal: N,
                badgeColor: l.A.colors.BACKGROUND_BRAND.css,
            }),
        n && R.push({ type: "CREATE_THREAD", icon: r.G, display: C.intl.string(C.t.rBIGBL) }),
        T && R.push({ type: "POLL", icon: o.Y, display: C.intl.string(C.t.Flr51u) }),
        i && x && R.push({ type: "SLASH_COMMAND", icon: c.k, display: C.intl.string(C.t.Bbvp6G) }),
        v.forEach((e) => {
            !(0, g.A)(e, E.jUm.EMBEDDED) &&
                (e.type === E.$pd.PLAYING &&
                    (0, g.A)(e, E.jUm.JOIN) &&
                    R.push({
                        type: "INVITE_TO_GAME",
                        icon: d.L,
                        display: C.intl.formatToPlainString(C.t["KHLo+F"], {
                            channel: (0, _.m1)(I, f.default, p.A, !0),
                            game: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === E.$pd.LISTENING &&
                    (0, g.A)(e, E.jUm.SYNC) &&
                    R.push({
                        type: "INVITE_TO_LISTEN",
                        icon: u.J,
                        display: C.intl.formatToPlainString(C.t.I479px, {
                            channel: (0, _.m1)(I, f.default, p.A, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === E.$pd.WATCHING &&
                    (0, g.A)(e, E.jUm.SYNC) &&
                    R.push({
                        type: "INVITE_TO_WATCH",
                        icon: h.b,
                        display: C.intl.formatToPlainString(C.t["EvCP/g"], {
                            channel: (0, _.m1)(I, f.default, p.A, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }));
        }),
        b && R.push({ type: "SCHEDULED_MESSAGE", icon: m.O, display: C.intl.string(C.t["3+ii4F"]) }),
        I.isThread() && j && R.push({ type: "SUMMARIZE_THREAD", icon: A.D, display: C.intl.string(C.t.EXfguE) }),
        R
    );
}
