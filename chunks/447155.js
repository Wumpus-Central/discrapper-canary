n.d(t, {
    A: () => h,
    v: () => p,
}),
    n(321073);
var r,
    l = n(827734),
    i = n(397927),
    a = n(833349),
    s = n(47167),
    o = n(994500),
    c = n(287809),
    u = n(184761),
    d = n(652215),
    f = n(985018),
    p =
        (((r = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE"),
        (r.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE"),
        (r.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME"),
        (r.INVITE_TO_LISTEN = "INVITE_TO_LISTEN"),
        (r.INVITE_TO_WATCH = "INVITE_TO_WATCH"),
        (r.CREATE_THREAD = "CREATE_THREAD"),
        (r.SLASH_COMMAND = "SLASH_COMMAND"),
        (r.CLIPS = "CLIPS"),
        (r.POLL = "POLL"),
        (r.ACTIVITY = "ACTIVITY"),
        (r.APP_LAUNCHER = "APP_LAUNCHER"),
        (r.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE"),
        (r.SUMMARIZE_THREAD = "SUMMARIZE_THREAD"),
        r);
function h(e) {
    let {
            canAttachFiles: t,
            canStartThreads: n,
            useSlate: r,
            canUseApplicationCommands: p,
            hasClips: h,
            channel: b,
            activities: g,
            newClipsCount: m,
            canPostPolls: A,
            canLaunchActivities: y,
            appContext: O,
            canSendScheduledMessages: j,
            canSummarizeThreads: v,
            showAppLauncher: x,
        } = e,
        E = [];
    t &&
        (E.push({
            type: "UPLOAD_A_FILE",
            icon: i.H8$,
            display: f.intl.string(f.t["d3+iYs"]),
        }),
        E.push({
            type: "UPLOAD_TEXT_AS_FILE",
            icon: i.H8$,
            display: f.intl.string(f.t["G9s+EM"]),
        })),
        h &&
            t &&
            O !== d.BRT.POPOUT &&
            E.push({
                type: "CLIPS",
                icon: i.xgA,
                display: f.intl.string(f.t.o034cv),
                badgeVal: m,
                badgeColor: l.A.colors.BACKGROUND_BRAND.css,
            }),
        n &&
            E.push({
                type: "CREATE_THREAD",
                icon: i.G_k,
                display: f.intl.string(f.t.rBIGBL),
            }),
        A &&
            E.push({
                type: "POLL",
                icon: i.YRe,
                display: f.intl.string(f.t.Flr51u),
            });
    let { renameAppsToAppCommandsInOverflow: _, moveAppsEntrypointToOverflow: C } = u.C.getConfig({
        location: "getChannelAttachOptions",
    });
    return (
        C
            ? x &&
              E.push({
                  type: "APP_LAUNCHER",
                  icon: i.k9F,
                  display: f.intl.string(f.t.nqswKn),
              })
            : r &&
              p &&
              E.push({
                  type: "SLASH_COMMAND",
                  icon: i.k9F,
                  display: f.intl.string(_ ? f.t["5Y0Fam"] : f.t.Bbvp6G),
              }),
        y &&
            E.push({
                type: "ACTIVITY",
                icon: i.bxf,
                display: f.intl.string(f.t["16Lfrb"]),
            }),
        g.forEach((e) => {
            !(0, a.A)(e, d.jUm.EMBEDDED) &&
                (e.type === d.$pd.PLAYING &&
                    (0, a.A)(e, d.jUm.JOIN) &&
                    E.push({
                        type: "INVITE_TO_GAME",
                        icon: i.LVO,
                        display: f.intl.formatToPlainString(f.t["KHLo+F"], {
                            channel: (0, s.m1)(b, c.default, o.A, !0),
                            game: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === d.$pd.LISTENING &&
                    (0, a.A)(e, d.jUm.SYNC) &&
                    E.push({
                        type: "INVITE_TO_LISTEN",
                        icon: i.J2m,
                        display: f.intl.formatToPlainString(f.t.I479px, {
                            channel: (0, s.m1)(b, c.default, o.A, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === d.$pd.WATCHING &&
                    (0, a.A)(e, d.jUm.SYNC) &&
                    E.push({
                        type: "INVITE_TO_WATCH",
                        icon: i.bMW,
                        display: f.intl.formatToPlainString(f.t["EvCP/g"], {
                            channel: (0, s.m1)(b, c.default, o.A, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }));
        }),
        j &&
            E.push({
                type: "SCHEDULED_MESSAGE",
                icon: i.O4,
                display: f.intl.string(f.t["3+ii4F"]),
            }),
        b.isThread() &&
            v &&
            E.push({
                type: "SUMMARIZE_THREAD",
                icon: i.Dud,
                display: f.intl.string(f.t.EXfguE),
            }),
        E
    );
}
