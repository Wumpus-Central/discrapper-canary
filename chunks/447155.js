n.d(t, { A: () => m, v: () => h }), n(321073);
var i,
    l = n(827734),
    a = n(397927),
    s = n(833349),
    r = n(47167),
    o = n(994500),
    c = n(287809),
    d = n(652215),
    u = n(985018),
    h =
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
function m(e) {
    let {
            canAttachFiles: t,
            canStartThreads: n,
            useSlate: i,
            canUseApplicationCommands: h,
            hasClips: m,
            channel: A,
            activities: p,
            newClipsCount: g,
            canPostPolls: f,
            appContext: _,
            canSendScheduledMessages: E,
            canSummarizeThreads: C,
        } = e,
        x = [];
    return (
        t &&
            (x.push({ type: "UPLOAD_A_FILE", icon: a.H8$, display: u.intl.string(u.t["d3+iYs"]) }),
            x.push({ type: "UPLOAD_TEXT_AS_FILE", icon: a.H8$, display: u.intl.string(u.t["G9s+EM"]) })),
        m &&
            t &&
            _ !== d.BRT.POPOUT &&
            x.push({
                type: "CLIPS",
                icon: a.xgA,
                display: u.intl.string(u.t.o034cv),
                badgeVal: g,
                badgeColor: l.A.colors.BACKGROUND_BRAND.css,
            }),
        n && x.push({ type: "CREATE_THREAD", icon: a.G_k, display: u.intl.string(u.t.rBIGBL) }),
        f && x.push({ type: "POLL", icon: a.YRe, display: u.intl.string(u.t.Flr51u) }),
        i && h && x.push({ type: "SLASH_COMMAND", icon: a.k9F, display: u.intl.string(u.t.Bbvp6G) }),
        p.forEach((e) => {
            !(0, s.A)(e, d.jUm.EMBEDDED) &&
                (e.type === d.$pd.PLAYING &&
                    (0, s.A)(e, d.jUm.JOIN) &&
                    x.push({
                        type: "INVITE_TO_GAME",
                        icon: a.LVO,
                        display: u.intl.formatToPlainString(u.t["KHLo+F"], {
                            channel: (0, r.m1)(A, c.default, o.A, !0),
                            game: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === d.$pd.LISTENING &&
                    (0, s.A)(e, d.jUm.SYNC) &&
                    x.push({
                        type: "INVITE_TO_LISTEN",
                        icon: a.J2m,
                        display: u.intl.formatToPlainString(u.t.I479px, {
                            channel: (0, r.m1)(A, c.default, o.A, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === d.$pd.WATCHING &&
                    (0, s.A)(e, d.jUm.SYNC) &&
                    x.push({
                        type: "INVITE_TO_WATCH",
                        icon: a.bMW,
                        display: u.intl.formatToPlainString(u.t["EvCP/g"], {
                            channel: (0, r.m1)(A, c.default, o.A, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }));
        }),
        E && x.push({ type: "SCHEDULED_MESSAGE", icon: a.O4, display: u.intl.string(u.t["3+ii4F"]) }),
        A.isThread() && C && x.push({ type: "SUMMARIZE_THREAD", icon: a.Dud, display: u.intl.string(u.t.EXfguE) }),
        x
    );
}
