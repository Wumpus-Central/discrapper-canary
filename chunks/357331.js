(n.r(t), n.d(t, { default: () => tr }));
var a,
    l = n(477900),
    i = n(582128),
    s = n(503698),
    o = n.n(s),
    r = n(536637),
    d = n.n(r),
    u = n(17928),
    c = n(314116),
    p = n(534890),
    m = n(646270),
    h = n(31300),
    f = n(939249),
    g = n(834730),
    y = n(691540),
    b = n(857250),
    x = n(97483),
    j = n(821609),
    v = n(92446),
    w = n(625903),
    k = n(297264),
    C = n(364522),
    A = n(103557),
    I = n(691885),
    N = n(289873),
    E = n(152367),
    S = n(661531),
    P = n(627363),
    R = n(625180),
    _ = n(672929),
    D = n(742589),
    T = n(976860),
    M = n(885386),
    L = n(696451),
    V = n(71393),
    O = n(576705),
    z = n(486020),
    G = n(50617),
    F = n(375708),
    B = n(948230),
    Y = n(936494),
    H = n(976713),
    X = n(673724),
    U = n(208137),
    q = n(964992),
    K = n(683180),
    W = n(805332),
    Z = n(277977),
    $ = n(972786);
function Q(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var J = n(58703);
let ee = [
    {
        date: "2026-09-16",
        platforms: ["mobile"],
        summary:
            "On phones, tap a name or avatar in the transcript to open their profile, and hold a message to copy its text; handy when building together.",
    },
    {
        date: "2026-09-16",
        platforms: ["mobile"],
        summary:
            "On phones, the model picker now sits in the composer until you start typing, and send and stop take turns in that corner as they do in a text channel.",
    },
    {
        date: "2026-09-16",
        platforms: ["mobile"],
        summary:
            "On phones, the strip above the composer now shows what Conjure is doing and the runes used, as on desktop; tap the indicator to read the model\u2019s reasoning as it streams.",
    },
    {
        date: "2026-09-16",
        platforms: ["mobile"],
        summary: "While Conjure works on your phone, a side quest may be offered when a video quest is available.",
    },
    {
        date: "2026-09-16",
        platforms: ["mobile"],
        summary:
            "On phones, helpers now say what they finished and how long it took, a quick aside is marked as one, and a project that is gone says so instead of closing.",
    },
    {
        date: "2026-09-15",
        platforms: ["mobile"],
        summary:
            "With Discord\u2019s Developer Mode on, a project\u2019s menu on phones has a Debug entry: your app\u2019s runtime logs, its resource use, and the agent\u2019s spend and limits.",
    },
    {
        date: "2026-09-15",
        platforms: ["mobile"],
        summary:
            "On phones, a project has the same menu as desktop: remix it, export or import it, get its coding tool link, browse version history and rewind its data from the chat menu, and copy its link or ID, open its settings or delete it from the landing.",
    },
    {
        date: "2026-09-14",
        platforms: ["mobile"],
        summary:
            "The box for answering a question in your own words no longer grabs the keyboard the moment a question appears, and it reads as an answer rather than a heading.",
    },
    {
        date: "2026-09-14",
        platforms: ["mobile"],
        summary:
            "On phones, the builder chat now matches desktop: a turn\u2019s work folds behind one line, each helper wears its creature, an interrupted turn says so, and the glow no longer slows the chat down.",
    },
    {
        date: "2026-09-14",
        platforms: ["mobile"],
        summary:
            "On phones, new projects start from a Create button in the header, with templates, starter prompts, who the app is for, and the Effort scale, and the landing leads with what is new.",
    },
    {
        date: "2026-09-14",
        platforms: ["mobile"],
        summary: "On phones, App Settings is one tap away in the chat menu, without waiting for Conjure to ask.",
    },
    {
        date: "2026-09-14",
        platforms: ["desktop"],
        summary:
            "An app's channel now opens its chat when unread messages are waiting, and new messages preview over the running app while the chat is closed.",
    },
    {
        date: "2026-09-13",
        platforms: ["desktop"],
        summary:
            "Escape or a click outside the frame now leaves select mode from anywhere, closing whatever was open without picking anything.",
    },
    {
        date: "2026-09-12",
        platforms: ["desktop", "mobile"],
        summary:
            "While you preview an app, every notification it sends arrives as a DM to you, naming anyone it concerns, so nothing you test posts to a channel or messages anyone else.",
    },
    {
        date: "2026-09-12",
        platforms: ["desktop", "mobile"],
        summary:
            "Plans for an app you imported or remixed no longer invent a wireframe sketch: the sketch is reserved for brand-new apps that have no screens yet.",
    },
    {
        date: "2026-09-11",
        platforms: ["desktop", "mobile"],
        summary:
            "A new Rust Sphere template: a spinning, lit 3D globe drawn by Rust running as WebAssembly, ready to remix into your own renderer.",
    },
    {
        date: "2026-09-10",
        platforms: ["desktop", "mobile"],
        summary:
            "Hitting your project limit, or conjuring too fast, now says so instead of just asking you to try again.",
    },
    {
        date: "2026-09-09",
        platforms: ["desktop", "mobile"],
        summary:
            "Pick which app a voice channel runs from the call itself, and switch between it and the participants.",
    },
    {
        date: "2026-09-09",
        platforms: ["mobile"],
        summary:
            "On phones, an app channel now has a chat button: read and post in the channel as usual, then tap back to the app.",
    },
    {
        date: "2026-09-09",
        platforms: ["desktop"],
        summary:
            "The app frame can go fullscreen: a new header control fills your whole screen with the running app, and Escape brings the view back.",
    },
    {
        date: "2026-09-08",
        platforms: ["desktop", "mobile"],
        summary: "App settings that name a channel now offer a channel picker instead of asking you to paste an id.",
    },
    {
        date: "2026-09-08",
        platforms: ["desktop"],
        summary:
            "Made a mistake in your app\u2019s data? Conjure now saves a restore point before every deploy, lets you save your own, and can rewind the app\u2019s data to any restore point or exact moment from the last 30 days, keeping an undo point so a rewind is never one-way.",
    },
    {
        date: "2026-09-08",
        platforms: ["desktop"],
        summary:
            "Importing a big project is faster and narrates its progress, and a zip that still has node_modules or .git inside now imports cleanly, telling you what was left out.",
    },
    {
        date: "2026-09-08",
        platforms: ["desktop", "mobile"],
        summary:
            "The checklist step being worked on gets its box back: the spinner turns inside the same frame the finished tick fills in.",
    },
    {
        date: "2026-09-08",
        platforms: ["desktop"],
        summary:
            "Comment mode now picks whatever is under your pointer, not only buttons and headings, and outlines it so you can see what you are about to comment on. Each note is pinned to the exact spot you clicked, and its card opens out of that pin.",
    },
    {
        date: "2026-09-07",
        platforms: ["desktop", "mobile"],
        summary:
            "A Priority toggle arrives in the model picker: on models that offer it, replies come back sooner for more runes, and the Speedrun stop now runs it by default.",
    },
    {
        date: "2026-09-07",
        platforms: ["desktop", "mobile"],
        summary:
            "An app with public pages can now claim a name for its web address \u2014 yourgame.discordvibeapps.com instead of a long number \u2014 and links to the old address keep working.",
    },
    {
        date: "2026-09-07",
        platforms: ["desktop"],
        summary:
            "You can now point at your app instead of describing it. Turn on comment mode, click anything on screen to leave a note on that exact piece, and every note you leave stays marked where you left it. Reopen any of them to change your wording or take it back, then send the whole set at once with a note for all of it. Once sent, the set reads back as a tidy summary of what you asked for rather than a page of technical detail.",
    },
    {
        date: "2026-09-06",
        platforms: ["desktop", "mobile"],
        summary:
            "Every build step now shows its progress behind the curtain \u2014 what is syncing, installing, bundling, packing, checking, and publishing \u2014 instead of one silent line.",
    },
    {
        date: "2026-09-06",
        platforms: ["desktop"],
        summary:
            "Collaborators on an app shared with their server can now remix it into a copy of their own, with no need for the owner to turn sharing on first.",
    },
    {
        date: "2026-09-06",
        platforms: ["desktop", "mobile"],
        summary:
            "Remixed an app? When the original improves, Conjure offers to update your copy while keeping every change you made, only checking with you on the rare spot it cannot keep both. You can also ask it to inherit updates from another app by its project id, even for a project you imported rather than remixed.",
    },
    {
        date: "2026-09-05",
        platforms: ["desktop", "mobile"],
        summary: "GPT-6 Astra joins the model picker and now powers the Big Brain effort stop.",
    },
    {
        date: "2026-09-05",
        platforms: ["desktop", "mobile"],
        summary:
            "The rune panel is simpler now: one Conjuring count covers all the work in a turn, with Compacting listed separately.",
    },
    {
        date: "2026-09-05",
        platforms: ["desktop", "mobile"],
        summary:
            "Your app now has its own web address: pages people can open in a browser, a second address showing the version you are still working on, and a Sign in with Discord button that never asks anyone for a password.",
    },
    {
        date: "2026-09-05",
        platforms: ["desktop", "mobile"],
        summary:
            "Claude Fable 5.1 replaces Claude Fable 5 in the model picker, sharper on long builds at the same price.",
    },
    {
        date: "2026-09-03",
        platforms: ["desktop"],
        summary: "Remix an app and Conjure builds your copy first, so the ideas it suggests are ones you can try.",
    },
    {
        date: "2026-09-03",
        platforms: ["desktop", "mobile"],
        summary:
            "Your published app stays playable while Conjure drives the preview, instead of both freezing at once.",
    },
    {
        date: "2026-09-02",
        platforms: ["desktop", "mobile"],
        summary:
            "One Effort scale, from Speedrun to Big Brain, sets how much thinking goes into a run, instead of choosing models and thinking levels separately.",
    },
    {
        date: "2026-09-02",
        platforms: ["desktop", "mobile"],
        summary:
            "Apps now know who\u2019s using them the moment they open, without asking anyone to sign in or approve anything.",
    },
    {
        date: "2026-09-02",
        platforms: ["desktop"],
        summary:
            "A project you import gets fixed up and running straight away, instead of asking you to approve a plan.",
    },
    {
        date: "2026-09-02",
        platforms: ["desktop", "mobile"],
        summary:
            "Small follow-ups like adding sign-in are built straight away, instead of coming back as another plan to approve.",
    },
    {
        date: "2026-09-02",
        platforms: ["desktop", "mobile"],
        summary:
            "When a plan is redrawn, the new sketch keeps the look of the one before it, so your app still looks like itself.",
    },
    {
        date: "2026-09-01",
        platforms: ["desktop", "mobile"],
        summary:
            "Publishing now offers patch notes: Conjure drafts what changed since your last release, you edit them, and they post to a channel you pick.",
    },
    {
        date: "2026-09-01",
        platforms: ["desktop", "mobile"],
        summary: "People you share a project with can see the Publish control, instead of it being owner-only.",
    },
    {
        date: "2026-09-01",
        platforms: ["desktop", "mobile"],
        summary:
            "Checklist items Conjure is still working on show a spinner, so running and done tell apart at a glance.",
    },
    {
        date: "2026-08-31",
        platforms: ["desktop", "mobile"],
        summary: "Plan proposals come with a wireframe sketch, so you can see the shape of the app before you say go.",
    },
    {
        date: "2026-08-31",
        platforms: ["desktop"],
        summary:
            "With Discord\u2019s Developer Mode on, a debug pane beside the builder shows your app\u2019s live logs and what your project is spending.",
    },
    {
        date: "2026-08-31",
        platforms: ["desktop", "mobile"],
        summary:
            "Your project gets a real name as soon as Conjure lands on a plan, instead of sitting as Untitled App.",
    },
    {
        date: "2026-08-31",
        platforms: ["desktop", "mobile"],
        summary:
            "App icons are drawn to suit what the app actually does, and always come back solid rather than see-through.",
    },
    {
        date: "2026-08-28",
        platforms: ["desktop", "mobile"],
        summary: "Apps you install just for yourself can hold an ordinary back-and-forth conversation with you in DMs.",
    },
    {
        date: "2026-08-26",
        platforms: ["desktop", "mobile"],
        summary:
            "You can move back and forth through Conjure\u2019s questions instead of being held on the one in front of you.",
    },
    {
        date: "2026-08-26",
        platforms: ["desktop", "mobile"],
        summary: "Hand a project to a whole role in settings, rather than adding one person at a time.",
    },
    {
        date: "2026-08-25",
        platforms: ["desktop"],
        summary: "Conjuring has its own doorway in the desktop title bar, so it is one click away from anywhere.",
    },
];
var et = n(413927);
function en() {
    let e = ee.filter((e) => e.platforms.includes("desktop")).slice(0, 3);
    if (0 === e.length) return null;
    let t = F.intl.string(G.default.x07mpp);
    return (0, l.jsxs)("section", {
        className: et.rN,
        "aria-label": t,
        children: [
            (0, l.jsxs)("div", {
                className: et.bZ,
                children: [
                    (0, l.jsx)(g.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, l.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: F.intl.string(G.default.h5CwHI),
                    }),
                ],
            }),
            (0, l.jsx)("ol", {
                className: et.V,
                children: e.map((e) =>
                    (0, l.jsxs)(
                        "li",
                        {
                            className: et.S3,
                            children: [
                                (0, l.jsxs)(g.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: et.VO,
                                    children: [
                                        (0, J.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        1 === e.platforms.length ? ` \xb7 ${F.intl.string(G.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, l.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: e.summary,
                                }),
                            ],
                        },
                        `${e.date}-${e.summary}`,
                    ),
                ),
            }),
        ],
    });
}
var ea = n(641985),
    el = n(210744),
    ei = n(922016),
    es = n(980707),
    eo = n(477782),
    er = n(81369),
    ed = n(402879);
async function eu(e, t, n) {
    (0, Z.Hc)(e);
    let a = await (0, Z.vX)(e, t);
    (0, Z.dv)(e, n, [a]);
}
function ec(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, X.x5)(e.size, t)
        ? null
        : F.intl.formatToPlainString(G.default.AzziHF, { size: (0, X.ZJ)((0, X.yr)(t)) });
}
async function ep(e, t) {
    let n,
        a =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "vibegration" : n}.zip`),
        l = await (0, Z.cS)(e, a);
    await (0, ed.F)(l, a);
}
function em(e) {
    let t = i.useRef(null),
        n = i.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, l.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: n,
        }),
    };
}
var eh = n(950305),
    ef = n(664121);
let eg = [
    { value: "user", icon: eh.UserIcon, nameMessage: G.default.iqXIRN },
    { value: "guild", icon: ef.R, nameMessage: G.default.LdgKdI },
];
function ey(e) {
    let { importing: t, onImport: n } = e,
        a = i.useRef(null),
        s = em(i.useCallback((e) => n(e, "user"), [n])),
        o = em(i.useCallback((e) => n(e, "guild"), [n])),
        r = { user: s.open, guild: o.open };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ei.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: ei.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(es.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": F.intl.string(G.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, l.jsx)(eo.rX, {
                            label: F.intl.string(G.default.MLg0S8),
                            children: eg
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: F.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, l.jsx)(
                                        eo.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, l.jsx)(j.$, {
                        ...e,
                        buttonRef: a,
                        variant: "secondary",
                        size: "sm",
                        icon: er.H,
                        text: F.intl.string(G.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": i,
                    });
                },
            }),
            s.input,
            o.input,
        ],
    });
}
var eb = n(113491),
    ex = n(629584),
    ej = n(148853),
    ev = n(491920);
function ew(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, ej.kZ)(e), "aria-controls": (0, ej.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, l.jsx)(ex.I, {
              role: "tablist",
              look: "pill",
              className: o()(ev.b, s),
              optionClassName: ev.u,
              options: r,
              value: n,
              onChange: d,
          });
}
var ek = n(663417),
    eC = n(70688),
    eA = n(173936),
    eI = n(473935),
    eN = n(365199),
    eE = n(770818),
    eS = n(147036),
    eP = n(957565),
    eR = n(557875),
    e_ = n(869369),
    eD = n(123917);
let eT = new Set();
n(321073);
var eM = n(746080),
    eL = n(793712);
let eV = [];
function eO(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: a,
            projectGuildId: s,
            isOwner: o,
            canRemix: r,
            onExport: d,
            onImport: p,
            onRemix: m,
            onConnectTool: h,
            onVersionHistory: f,
            onRestorePoints: g,
            onRefresh: j,
            isRefreshing: v = !1,
            onClose: k,
            refreshApplicationId: C,
            previewProjectId: A,
        } = e,
        I = i.useRef(null),
        { pending: N, refresh: E } = (0, eE.A)(C ?? null),
        { pending: S, connect: P } = (function (e) {
            let [t, n] = i.useState(eT),
                a = i.useRef(eT),
                l = i.useCallback((e) => {
                    ((a.current = (0, eR.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: t,
                connect: i.useCallback(
                    (t) => {
                        if (null == e) return;
                        let i = (0, eR.K9)(a.current, t.type);
                        async function s() {
                            let n = await (0, Z.JI)(e, t.type);
                            if ((l(t.type), "url" === n.type)) return void (0, eD.h)({ href: n.url, trusted: !1 });
                            let a =
                                "setup" === (0, eR.rq)(n.error)
                                    ? F.intl.string(G.default.avu1u4)
                                    : F.intl.string(G.default["5fwOcF"]);
                            (0, y.P0)((0, b.o)(a, x.Ck.FAILURE));
                        }
                        null != i && ((a.current = i), n(i), s().catch(() => l(t.type)));
                    },
                    [e, l],
                ),
            };
        })(A ?? null),
        R = (0, u.bG)([Z.Ay], () => (null == A ? eV : Z.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: a, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: s } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: F.intl.string(G.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            a))
                i.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: F.intl.formatToPlainString(G.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: F.intl.formatToPlainString(G.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != C,
            refreshPending: N,
            offers: i.useMemo(() => (0, eR.Xl)(R), [R]),
            connectPending: S,
        }),
        T = i.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        M = null != m && r,
        L = o && null != p,
        V = M || null != d || L || null != h || null != f || null != g,
        O = eP.p5 && null != a,
        z = eP.p5;
    return null != j || null != k || V || z || o
        ? (0, l.jsx)(ei.Y, {
              targetElementRef: I,
              position: "bottom",
              align: "right",
              animation: ei.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsxs)(es.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": F.intl.string(F.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != j || null != k
                              ? (0, l.jsxs)(eo.rX, {
                                    children: [
                                        null != j
                                            ? (0, l.jsx)(eo.Dr, {
                                                  id: "refresh",
                                                  icon: ek.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: ek.RefreshIcon },
                                                  label: F.intl.string(G.default.xKexN1),
                                                  disabled: v,
                                                  action: j,
                                              })
                                            : null,
                                        null != k
                                            ? (0, l.jsx)(eo.Dr, {
                                                  id: "close",
                                                  icon: eC.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eC.DoorExitIcon },
                                                  label: F.intl.string(G.default.Ea0Wrr),
                                                  action: k,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, l.jsx)(eo.rX, {
                                    children: _.map((e) =>
                                        (0, l.jsx)(
                                            eo.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void E();
                                                    let t = null == e.connectionType ? null : T.get(e.connectionType);
                                                    null != t && P(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          V
                              ? (0, l.jsxs)(eo.rX, {
                                    children: [
                                        M
                                            ? (0, l.jsx)(eo.Dr, {
                                                  id: "remix",
                                                  label: F.intl.string(G.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, l.jsx)(eo.Dr, {
                                                  id: "export",
                                                  label: F.intl.string(G.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        L
                                            ? (0, l.jsx)(eo.Dr, {
                                                  id: "import",
                                                  label: F.intl.string(G.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, l.jsx)(eo.Dr, {
                                                  id: "connect-tool",
                                                  label: F.intl.string(G.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, l.jsx)(eo.Dr, {
                                                  id: "version-history",
                                                  label: F.intl.string(G.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, l.jsx)(eo.Dr, {
                                                  id: "restore-points",
                                                  label: F.intl.string(G.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          z
                              ? (0, l.jsxs)(eo.rX, {
                                    children: [
                                        O
                                            ? (0, l.jsx)(eo.Dr, {
                                                  id: "copy-link",
                                                  label: F.intl.string(F.t.WqhZss),
                                                  icon: eA.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eA.LinkIcon },
                                                  action: () =>
                                                      (0, eP.C)((0, eS.n)(a, eM.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, b.o)(F.intl.string(F.t["L/PwZf"]), x.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, l.jsx)(eo.Dr, {
                                            id: "copy-project-id",
                                            label: F.intl.string(G.default.b4TqpT),
                                            icon: eI.L,
                                            leadingAccessory: { type: "icon", icon: eI.L },
                                            action: () =>
                                                (0, eP.C)(t, () =>
                                                    (0, y.P0)((0, b.o)(F.intl.string(G.default.WOKsTg), x.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, l.jsxs)(eo.rX, {
                                    children: [
                                        (0, l.jsx)(eo.Dr, {
                                            id: "settings",
                                            label: F.intl.string(G.default["xhcY+n"]),
                                            icon: w.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: w.SettingsIcon },
                                            action: () => (0, e_.A)(t, s ?? a),
                                        }),
                                        (0, l.jsx)(eo.Dr, {
                                            id: "delete",
                                            label: F.intl.string(F.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, c.A)({
                                                    title: F.intl.formatToPlainString(G.default.ZokHVz, { name: n }),
                                                    subtitle: F.intl.string(G.default.NmF939),
                                                    confirmText: F.intl.string(F.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, B.xx)(t)).ok)
                                                            throw Error(F.intl.string(G.default.tqKZCi));
                                                    },
                                                });
                                            },
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  });
              },
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: a } = t;
                  return (0, l.jsx)("div", {
                      ref: I,
                      className: eL.h,
                      children: (0, l.jsx)(D.A.Icon, {
                          icon: eN.MoreHorizontalIcon,
                          tooltip: F.intl.string(F.t["UKOtz+"]),
                          "aria-label": F.intl.string(F.t["UKOtz+"]),
                          "aria-haspopup": "menu",
                          "aria-expanded": a,
                          selected: a,
                          onClick: n,
                      }),
                  });
              },
          })
        : null;
}
var ez = n(769979);
function eG(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, l.jsx)(D.A, {
        hideSearch: !0,
        toolbar: n,
        className: ez.wx,
        "aria-label": t,
        children: (0, l.jsxs)("div", {
            className: ez.QF,
            children: [
                (0, l.jsx)(E.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: ez.Kk,
                }),
                null != a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(D.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, l.jsx)(D.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(D.A.Title, { className: ez.Qw, wrapperClassName: ez.DD, children: t }),
            ],
        }),
    });
}
var eF = n(73432),
    eB = n(683071),
    eY = n(47167),
    eH = n(808728),
    eX = n(994500),
    eU = n(287809),
    eq = n(652215);
let eK = "conjuring-help";
var eW = n(107148);
function eZ() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, u.cf)([eU.default, V.A, eH.Ay, eX.A], () => {
                let e = eU.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of V.A.getGuildsArray()) {
                    if (!t.features.has(eq.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = eH.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, eY.m1)(t, eU.default, eX.A) === eK;
                    });
                    if (null != n) return { isStaff: e, guildId: t.id, channelId: n.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != n
                    ? { kind: "channel", guildId: t, channelId: n }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, T.pX)(eq.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, eD.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, l.jsx)("div", {
              className: eW.l,
              children: (0, l.jsx)(eB.w, {
                  type: "info",
                  iconAlign: "center",
                  children: F.intl.format(G.default["4BsHmp"], { channel: eK, onNavigate: t }),
              }),
          });
}
var e$ = n(321593),
    eQ = n(580954),
    eJ = n(192308),
    e0 = n(189213),
    e2 = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function e1(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        i = "permissions" === t;
    return (0, l.jsx)(e0.Modal, {
        transitionState: n,
        onClose: a,
        title: F.intl.string(i ? G.default.Rtlv25 : G.default["+UouPe"]),
        subtitle: F.intl.string(i ? G.default["nDQB/b"] : G.default["E0QD++"]),
        size: "sm",
        actions: [{ text: F.intl.string(i ? F.t.BddRzS : G.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function e6(e) {
    (0, eJ.openModal)((t) => (0, l.jsx)(e1, { ...t, reason: e }));
}
var e9 = n(480007),
    e8 = n(584936),
    e3 = n(899154),
    e7 = n(783134),
    e5 = n(985451),
    e4 = n(675210),
    te = n(165610),
    tt = n(352978);
function tn(e) {
    return (0, l.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function ta(e) {
    return (0, l.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function tl(e) {
    return (0, l.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function ti(e) {
    let t,
        n,
        a,
        s,
        o,
        { project: r, guildId: u, onSelect: p, onRemix: m } = e,
        h =
            ((t = r.id),
            (n = r.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, y.P0)((0, b.o)(F.intl.formatToPlainString(G.default.u9TapG, { name: n }), x.Ck.MESSAGE)),
                    ep(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, y.P0)(
                                    (0, b.o)(
                                        409 === (n = e instanceof Z._v ? e.status : null)
                                            ? F.intl.string(G.default.uB40Hz)
                                            : 404 === n
                                              ? F.intl.string(G.default.wCq2jC)
                                              : F.intl.string(G.default.G2GqyP),
                                        x.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: s,
                onImport: (o = em(
                    i.useCallback(
                        (e) => {
                            let a = ec(e);
                            null != a
                                ? (0, y.P0)((0, b.o)(a, x.Ck.FAILURE))
                                : (0, c.A)({
                                      title: F.intl.formatToPlainString(G.default.XYZqZK, { name: n }),
                                      subtitle: F.intl.string(G.default["6syXoH"]),
                                      confirmText: F.intl.string(G.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, T.pX)(eq.BVt.CHANNEL(u, eM.VV.VIBEGRATIONS, t));
                                          try {
                                              await eu(t, e, F.intl.string(G.default.C7GU2r));
                                          } catch {
                                              (0, y.P0)((0, b.o)(F.intl.string(G.default["02GpNr"]), x.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, n, u],
                    ),
                )).open,
                importInput: o.input,
            }),
        j = r.preview_application_id ?? r.application_id,
        { data: v } = (0, P.YY)(j),
        w =
            null == r.updated_at
                ? null
                : F.intl.formatToPlainString(G.default.oMDaqr, { time: d()(r.updated_at).fromNow() });
    return (0, l.jsxs)("div", {
        className: tt.OY,
        children: [
            (0, l.jsx)(e$.Ay, { projectId: r.id }),
            (0, l.jsxs)(f.D, {
                className: tt.W6,
                onClick: p,
                children: [
                    (0, l.jsx)("img", {
                        alt: "",
                        src: z.Ay.getApplicationIconURL({ id: j, icon: v?.icon, size: 40 }),
                        className: tt.VJ,
                    }),
                    (0, l.jsxs)("div", {
                        className: tt.MM,
                        children: [
                            (0, l.jsx)(g.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tt.j1,
                                children: r.name,
                            }),
                            null == w
                                ? null
                                : (0, l.jsx)("div", {
                                      className: tt.h3,
                                      children: (0, l.jsx)(g.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: w,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tt.M2,
                children: (0, l.jsxs)("div", {
                    className: tt.Pl,
                    children: [
                        (0, l.jsx)(eO, {
                            projectId: r.id,
                            projectName: r.name,
                            guildId: u,
                            projectGuildId: r.guild_id,
                            isOwner: (0, $.PV)(r),
                            canRemix: (0, $.H_)(r),
                            onRemix: m,
                            onExport: h.onExport,
                            onImport: h.onImport,
                        }),
                        h.importInput,
                    ],
                }),
            }),
        ],
    });
}
function ts(e) {
    let { project: t, projectsLoaded: a, onBack: s, guildId: o } = e,
        [r, d] = i.useState(!1),
        [p, m] = i.useState(!0),
        [h, f] = i.useState(!1),
        [C, A] = i.useState(!1),
        [I, N] = i.useState(!1),
        E = M.Q_.useSetting(),
        [S, L] = i.useState(null),
        [V, O] = i.useState(null),
        z = t?.id ?? null,
        Y = i.useRef(z),
        H = i.useRef(!0),
        X = i.useRef(!1),
        U = i.useRef(null);
    ((Y.current = z),
        i.useEffect(
            () => (
                (H.current = !0),
                () => {
                    H.current = !1;
                }
            ),
            [],
        ));
    let K = (0, u.bG)([$.Ay], () => (null == z ? null : $.Ay.getIntegrationStatus(z)), [z]),
        { data: Q, isLoading: J } = (0, P.YY)(t?.preview_application_id ?? void 0),
        ee = null != z && V !== z,
        et = K?.preview_ready === !0,
        en = K?.has_activity === !0,
        {
            availability: ei,
            activeMode: es,
            setMode: eo,
            widgetApplicationId: er,
        } = (0, e3.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: en,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: K?.owner_authorization_revoked === !0,
        }),
        ed = (0, e4.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: et,
            integrationInstalled: K?.integration_installed ?? null,
            botPermissionsChanged: K?.bot_permissions_changed === !0,
        }),
        ep = r || ee || J,
        eh = F.intl.string(G.default["5gU57O"]),
        ef = p && !I && !h && !C,
        eg = F.intl.string(ef ? G.default.YdgE0j : G.default.aWVf4j),
        ey = i.useCallback(() => {
            if (I || h || C) {
                (N(!1), f(!1), A(!1), m(!0));
                return;
            }
            m((e) => !e);
        }, [I, h, C]),
        eb = i.useCallback(() => m(!1), []),
        { active: ex } = (0, e7.Q_)(z),
        ej = i.useRef(null),
        ev = (0, e5.o4)(z),
        ek = F.intl.string(ev ? G.default.bfQ4Ki : ex ? G.default.rfNEHn : G.default.lXcEa2),
        eC = i.useCallback(() => {
            if (null != z) {
                if (ex) return void (0, e7.PS)(z);
                (N(!1), f(!1), A(!1), m(!0), (0, e7.nI)(z));
            }
        }, [z, ex]),
        eA = i.useCallback(() => {
            N((e) => !e && (m(!0), f(!1), A(!1), !0));
        }, []),
        eI = i.useCallback(() => N(!1), []),
        eN = i.useCallback(
            (e) => {
                if (null == t || X.current) return;
                let n = t.id;
                function a() {
                    return H.current && Y.current === n;
                }
                ((X.current = !0),
                    f(!1),
                    m(!0),
                    L({ entry: e, status: "restoring" }),
                    (0, Z.oB)(n, e.sha)
                        .then(
                            () => {
                                a() && L({ entry: e, status: "restored" });
                            },
                            (t) => {
                                a() &&
                                    (L({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, y.P0)((0, b.o)(F.intl.string(G.default.q6iZ84), x.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (X.current = !1);
                        }));
            },
            [t],
        ),
        eE = (0, u.bG)([W.A], () => W.A.isBuilderPreviewMobile()),
        eS = F.intl.string(eE ? G.default["3uCc8U"] : G.default["+nzCxZ"]),
        eP = i.useCallback(() => (0, B.GG)(!eE), [eE]),
        eR = (0, _.A)(t?.preview_application_id ?? null, te.sd),
        eD = (0, te.x1)(eR) && eR.data.proxyTicketRefreshing,
        eT = i.useCallback(() => {
            null == eR || eD || R.A.refreshProxyTicket(eR.id);
        }, [eR, eD]),
        eL = i.useCallback(() => {
            var e, n;
            (null != t && ((e = t.id), (n = eR?.id), (0, Z.Bn)(e), (0, eQ.A)().leaveFrame(n)), s());
        }, [t, eR?.id, s]),
        eV = i.useCallback(() => {
            null != t && (m(!0), (0, Z.dv)(t.id, F.intl.string(G.default["2ejwtJ"])));
        }, [t]),
        ez = em(
            i.useCallback(
                (e) => {
                    if (null == t) return;
                    let n = t.id,
                        a = ec(e);
                    null != a
                        ? (0, y.P0)((0, b.o)(a, x.Ck.FAILURE))
                        : (0, c.A)({
                              title: F.intl.formatToPlainString(G.default.XYZqZK, { name: t.name }),
                              subtitle: F.intl.string(G.default["6syXoH"]),
                              confirmText: F.intl.string(G.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await eu(n, e, F.intl.string(G.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, b.o)(F.intl.string(G.default["02GpNr"]), x.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eB = i.useCallback(() => {
            null != t && (0, e8.A)(t, o);
        }, [t, o]),
        eY = i.useCallback(async () => {
            if (null == z || Y.current !== z) return;
            U.current?.abort();
            let e = new AbortController();
            ((U.current = e), O(null));
            try {
                await (0, B.U1)(z, e.signal);
            } catch {
            } finally {
                e.signal.aborted || U.current !== e || Y.current !== z || O(z);
            }
        }, [z]);
    i.useEffect(
        () => (
            eY(),
            () => {
                (U.current?.abort(), (U.current = null));
            }
        ),
        [eY],
    );
    let eH = K?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : o,
        eX = i.useCallback(async () => {
            null == t ||
                (t.guild_id === eH && t.preview_guild_id === eH) ||
                (await (0, B.M7)(t.id, { guild_id: eH, preview_guild_id: eH }));
        }, [eH, t]),
        eU = i.useCallback(async () => {
            try {
                await eX();
            } catch {}
            await eY();
        }, [eY, eX]),
        eK = i.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                q.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: Q ?? null,
                    guildId: eH,
                    onClose: () => {
                        eU();
                    },
                });
        }, [eU, eH, Q, t]),
        eW = ed
            ? { type: "permissions", onReviewPermissions: eK, loading: J || ee }
            : ee && null == K
              ? { type: "checking" }
              : void 0;
    i.useEffect(() => {
        null == t && a && (0, T.pX)(eq.BVt.CHANNEL(o, eM.VV.VIBEGRATIONS));
    }, [o, t, a]);
    let eZ = i.useCallback((e) => {
            d(!0);
            let t = (0, Z.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(F.intl.string(G.default.fNP6Cd));
                (0, B.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, y.P0)(
                            (0, b.o)(e instanceof Error ? e.message : F.intl.string(G.default.fNP6Cd), x.Ck.FAILURE),
                        );
                    })
                    .finally(() => d(!1)),
                t
            );
        }, []),
        e$ = i.useCallback(() => {
            if (null == t) return;
            if (!et) return void e6(e2.NO_PREVIEW);
            if (ed) return void e6(e2.PERMISSIONS);
            if ("user" === t.install_scope)
                return void eZ(t.id)
                    .then(() => {
                        (0, y.P0)((0, b.o)(F.intl.string(G.default.wA0o0L), x.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, Z.$C)(t.id);
            (e.catch(() => {}),
                (0, e9.A)({
                    projectId: t.id,
                    guildId: o,
                    applicationId: t.application_id,
                    projectName: t.name,
                    publish: eZ(t.id),
                    initialDraft: e,
                }));
        }, [o, ed, et, t, eZ]),
        e0 =
            null != t && (0, $.jf)(t)
                ? (0, l.jsx)(j.$, { size: "sm", variant: "primary", loading: r, disabled: ep, onClick: e$, text: eh })
                : null,
        e1 = (0, l.jsx)(eG, {
            title: t?.name ?? F.intl.string(G.default.F2dRba),
            breadcrumb: { title: F.intl.string(G.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          className: tt.FO,
                          children: [
                              ei.showModeSwitch ? (0, l.jsx)(ew, { modes: ei.modes, mode: es, onChange: eo }) : null,
                              (0, l.jsx)(D.A.Icon, {
                                  icon: eE ? tl : ta,
                                  tooltip: eS,
                                  "aria-label": eS,
                                  selected: eE,
                                  onClick: eP,
                              }),
                              (0, l.jsx)(D.A.Icon, {
                                  ref: ej,
                                  icon: eF.A,
                                  tooltip: ek,
                                  "aria-label": ek,
                                  selected: ex,
                                  disabled: ev,
                                  onClick: eC,
                              }),
                              "frame" === es ? (0, l.jsx)(el.A, { frame: eR, controlProjectId: t.id }) : null,
                              (0, l.jsx)("div", { className: tt.YJ }),
                              E
                                  ? (0, l.jsx)(D.A.Icon, {
                                        icon: v.BugIcon,
                                        tooltip: F.intl.string(G.default["8MLfBT"]),
                                        "aria-label": F.intl.string(G.default["8MLfBT"]),
                                        selected: I,
                                        onClick: eA,
                                    })
                                  : null,
                              (0, $.PV)(t)
                                  ? (0, l.jsx)(D.A.Icon, {
                                        icon: w.SettingsIcon,
                                        tooltip: F.intl.string(G.default["xhcY+n"]),
                                        "aria-label": F.intl.string(G.default["xhcY+n"]),
                                        onClick: () => (0, e_.A)(t.id, t.guild_id ?? o),
                                    })
                                  : null,
                              (0, l.jsx)(eO, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: o,
                                  projectGuildId: t.guild_id,
                                  isOwner: (0, $.PV)(t),
                                  canRemix: (0, $.H_)(t),
                                  onRefresh: (0, te.x1)(eR) ? eT : void 0,
                                  isRefreshing: eD,
                                  onClose: eL,
                                  onExport: eV,
                                  onImport: ez.open,
                                  onRemix: eB,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eJ.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, l.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      S?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (m(!0), N(!1), A(!1), f(!0));
                                            },
                                  onRestorePoints: () => {
                                      (m(!0), N(!1), f(!1), A(!0));
                                  },
                                  refreshApplicationId:
                                      ei.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ei.profileState
                                          ? er
                                          : null,
                                  previewProjectId: t.id,
                              }),
                              ef
                                  ? null
                                  : (0, l.jsx)(D.A.Icon, { icon: tn, tooltip: eg, "aria-label": eg, onClick: ey }),
                          ],
                      }),
        });
    return (0, l.jsxs)("div", {
        className: tt.nj,
        children: [
            ez.input,
            (0, l.jsx)("main", {
                className: tt.JX,
                children:
                    null == t
                        ? (0, l.jsxs)("div", {
                              className: tt.j5,
                              children: [
                                  e1,
                                  (0, l.jsxs)("div", {
                                      className: tt.sD,
                                      children: [
                                          (0, l.jsx)(k.D, {
                                              variant: "heading-lg/semibold",
                                              children: F.intl.string(G.default.F2dRba),
                                          }),
                                          (0, l.jsx)(g.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: F.intl.string(G.default.GnEJ3o),
                                          }),
                                          (0, l.jsx)(j.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: F.intl.string(G.default["42EdIV"]),
                                              onClick: () => (0, B.hF)(o),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, l.jsx)(
                              ea.A,
                              {
                                  projectId: t.id,
                                  designFeedbackToggleRef: ej,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: te.sd,
                                  header: e1,
                                  chatOpen: p,
                                  onCloseChat: eb,
                                  chatHeaderAction: e0,
                                  versionHistoryOpen: h,
                                  onCloseVersionHistory: () => f(!1),
                                  restorePointsOpen: C,
                                  onCloseRestorePoints: () => A(!1),
                                  installScope: t.install_scope,
                                  debugOpen: E && I,
                                  onCloseDebug: eI,
                                  onRestoreVersion: eN,
                                  restoreState: S,
                                  previewReady: et,
                                  previewGate: eW,
                                  availability: ei,
                                  activeMode: es,
                                  widgetApplicationId: er,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function to(e) {
    let {
            projects: t,
            sharedProjects: n,
            fetchState: a,
            idea: s,
            guildId: r,
            submitting: d,
            createError: u,
            createDisabled: c,
            installScope: p,
            onInstallScopeChange: m,
            installScopeError: h,
            modelSettings: y,
            onModelSettingsChange: b,
            onSelectProject: x,
            onIdeaChange: v,
            onCreate: w,
            onImportNewProject: P,
            importing: R,
        } = e,
        _ = i.useMemo(
            () =>
                n
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [n],
        ),
        D = i.useRef(null);
    i.useEffect(() => {
        null != h && D.current?.querySelector("button")?.focus();
    }, [h]);
    let T = i.useMemo(
            () =>
                t
                    .filter((e) => (0, K.X0)(e, r))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, r],
        ),
        M = F.intl.string(G.default.TU9IGR),
        L = [
            F.intl.string(G.default["E+Q26x"]),
            F.intl.string(G.default["06/jqP"]),
            F.intl.string(G.default["3gSfUa"]),
        ],
        V = [
            {
                id: "feature-showcase",
                name: F.intl.string(G.default.BLDsiz),
                description: F.intl.string(G.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: F.intl.string(G.default["+abXa8"]),
                description: F.intl.string(G.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: F.intl.string(G.default.ieAgex),
                description: F.intl.string(G.default["5yvj+f"]),
            },
        ],
        O = F.intl.string(G.default.FYK2xQ),
        z = F.intl.string(G.default["/SUK82"]),
        Y = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || w());
            },
            [c, w],
        );
    return (0, l.jsxs)("div", {
        className: o()(tt.nj, tt.a0),
        children: [
            (0, l.jsx)(eG, { title: F.intl.string(G.default.Xmvb23) }),
            (0, l.jsxs)("div", {
                className: tt.Yo,
                children: [
                    (0, l.jsxs)("main", {
                        className: tt.ps,
                        children: [
                            (0, l.jsx)(C.Ip, {
                                className: tt.Yy,
                                children: (0, l.jsx)("div", {
                                    className: tt.Mo,
                                    children: (0, l.jsxs)("section", {
                                        className: o()(tt.Qs, tt.Ix),
                                        children: [
                                            (0, l.jsx)(eZ, {}),
                                            (0, l.jsx)(k.D, {
                                                variant: "heading-xl/semibold",
                                                children: F.intl.string(G.default["2tYpRK"]),
                                            }),
                                            (0, l.jsxs)("section", {
                                                className: tt.WI,
                                                "aria-label": O,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: tt.G9,
                                                        children: [
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: O,
                                                            }),
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: F.intl.string(G.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("ol", {
                                                        className: tt.Aw,
                                                        children: V.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    className: tt.EA,
                                                                    children: (0, l.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": F.intl.formatToPlainString(
                                                                            G.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: o()(tt.nx, tt.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return w(
                                                                                      ((t = e.name),
                                                                                      F.intl.formatToPlainString(
                                                                                          G.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, l.jsx)(g.E, {
                                                                                className: tt.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, l.jsx)(g.E, {
                                                                                className: tt.BK,
                                                                                variant: "text-sm/normal",
                                                                                color: "text-subtle",
                                                                                children: e.description,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsxs)("section", {
                                                className: tt.WI,
                                                "aria-label": z,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: tt.G9,
                                                        children: [
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: z,
                                                            }),
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: F.intl.string(G.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("ol", {
                                                        className: tt.Aw,
                                                        children: L.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    className: tt.EA,
                                                                    children: (0, l.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: tt.nx,
                                                                        onClick: d ? void 0 : () => w(e),
                                                                        children: (0, l.jsx)(g.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: tt.un,
                                                                            children: e,
                                                                        }),
                                                                    }),
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsx)(en, {}),
                                        ],
                                    }),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: tt.Yl,
                                children: (0, l.jsxs)("div", {
                                    className: o()(tt.Qs, tt.DA),
                                    children: [
                                        (0, l.jsx)(A.f, {
                                            label: M,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: M,
                                            error: u,
                                            onChange: v,
                                            onKeyDown: Y,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: tt.VP,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: tt.gH,
                                                    ref: D,
                                                    children: (0, l.jsx)(I.l, {
                                                        selectionMode: "single",
                                                        label: F.intl.string(G.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: F.intl.string(G.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: F.intl.string(G.default.MLg0S8),
                                                                options: eg.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: F.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: h,
                                                    }),
                                                }),
                                                (0, l.jsx)(eb.A, {
                                                    settings: y ?? H.Cl,
                                                    choices: (0, U.e)()
                                                        ? {
                                                              main: [...X.S8.main, ...X.wF.main],
                                                              subagent: [...X.S8.subagent, ...X.wF.subagent],
                                                              thinking: X.S8.thinking,
                                                          }
                                                        : X.S8,
                                                    disabled: d,
                                                    onChange: b,
                                                }),
                                                (0, l.jsx)(j.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: F.intl.string(F.t.CumH4u),
                                                    disabled: c,
                                                    loading: d,
                                                    onClick: () => w(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("aside", {
                        className: tt.pA,
                        "aria-label": F.intl.string(G.default.Bo5fE3),
                        children: [
                            (0, l.jsxs)("div", {
                                className: tt.IR,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: tt.RM,
                                        children: [
                                            (0, l.jsx)(g.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: F.intl.string(G.default.Bo5fE3),
                                            }),
                                            (0, l.jsx)(g.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: F.intl.string(G.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(ey, { importing: R, onImport: P }),
                                ],
                            }),
                            (0, l.jsxs)(C.Ip, {
                                className: tt.xe,
                                children: [
                                    (null == a || "loading" === a.type) && 0 === T.length
                                        ? (0, l.jsx)("div", { className: tt.E8, children: (0, l.jsx)(N.y, {}) })
                                        : a?.type === "error" && 0 === T.length
                                          ? (0, l.jsxs)("div", {
                                                className: tt.E8,
                                                children: [
                                                    (0, l.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: tt.JS,
                                                        children: F.intl.string(G.default["IN/HRP"]),
                                                    }),
                                                    (0, l.jsx)(j.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: F.intl.string(G.default["42EdIV"]),
                                                        onClick: () => (0, B.hF)(r),
                                                    }),
                                                ],
                                            })
                                          : 0 === T.length
                                            ? (0, l.jsx)("div", {
                                                  className: tt.D1,
                                                  children: (0, l.jsxs)("div", {
                                                      className: tt.ST,
                                                      children: [
                                                          (0, l.jsx)(E.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: tt.sI,
                                                              children: F.intl.string(G.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, l.jsx)("div", {
                                                  className: tt.Dq,
                                                  children: T.map((e) =>
                                                      (0, l.jsx)(
                                                          ti,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => x(e.id),
                                                              onRemix: () => (0, e8.A)(e, r),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    _.length > 0
                                        ? (0, l.jsxs)("div", {
                                              className: tt.qx,
                                              children: [
                                                  (0, l.jsxs)("div", {
                                                      className: tt.uc,
                                                      children: [
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: F.intl.string(G.default.jrCnUc),
                                                          }),
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: F.intl.string(G.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)("div", {
                                                      className: tt.Dq,
                                                      children: _.map((e) =>
                                                          (0, l.jsx)(
                                                              ti,
                                                              {
                                                                  project: e,
                                                                  guildId: r,
                                                                  onSelect: () => x(e.id),
                                                                  onRemix: () => (0, e8.A)(e, r),
                                                              },
                                                              e.id,
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function tr(e) {
    let t,
        { guildId: n, projectId: a } = e,
        s = (0, u.yK)([$.Ay], () => $.Ay.getOwnedProjects()),
        o = (0, u.bG)([$.Ay], () => $.Ay.getProjectsFetchState()),
        r = (0, u.yK)([$.Ay], () => $.Ay.getSharedProjects(n), [n]),
        d = (0, u.yK)([L.Ay], () => L.Ay.getSelfMember(n)?.roles ?? [], [n]),
        c = (0, u.bG)(
            [V.A, O.A],
            () => {
                let e = V.A.getGuild(n);
                return null != e && O.A.can(eq.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [p, m] = i.useState(""),
        h = a ?? null,
        [f, g] = i.useState(!1),
        [j, v] = i.useState(null),
        [w, k] = i.useState("guild"),
        [C, A] = i.useState(null),
        [I, N] = i.useState(null);
    (i.useEffect(() => {
        (0, B.hF)(n);
    }, [n, d, c]),
        i.useEffect(() => {
            (0, B.dm)(n, h);
        }, [n, h]));
    let E = i.useCallback((e) => {
            (k(e), A(null));
        }, []),
        S = i.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    a = Q({ idea: t, installScope: w, submitting: f });
                if ("idea" !== a && "submitting" !== a) {
                    if (null == w) return void A(F.intl.string(G.default.jQ3nQB));
                    (null != e && m(e), g(!0), v(null));
                    try {
                        let e = await (0, B.gA)({ guild_id: n, install_scope: w });
                        ((0, Z.Hc)(e),
                            (0, Z.r2)(e, I ?? H.Cl),
                            (0, Z.dv)(e, t),
                            (0, T.pX)(eq.BVt.CHANNEL(n, eM.VV.VIBEGRATIONS, e)),
                            m(""),
                            N(null));
                    } catch (e) {
                        v((0, Y.Xd)(e));
                    } finally {
                        g(!1);
                    }
                }
            },
            [w, n, p, I, f],
        ),
        [P, R] = i.useState(!1),
        _ = i.useCallback(
            async (e, t) => {
                let a = ec(e);
                if (null != a) return void (0, y.P0)((0, b.o)(a, x.Ck.FAILURE));
                R(!0);
                let l = null;
                try {
                    ((l = await (0, B.gA)({ guild_id: n, install_scope: t })),
                        (0, Z.Hc)(l),
                        (0, Z.r2)(l, I ?? H.Cl),
                        await eu(l, e, F.intl.string(G.default.KjEtrZ)),
                        (0, T.pX)(eq.BVt.CHANNEL(n, eM.VV.VIBEGRATIONS, l)),
                        N(null));
                } catch {
                    (null != l && (await (0, B.xx)(l).catch(() => void 0)),
                        (0, y.P0)((0, b.o)(F.intl.string(G.default["02GpNr"]), x.Ck.FAILURE)));
                } finally {
                    R(!1);
                }
            },
            [n, I],
        ),
        D = i.useCallback(
            (e) => {
                (0, T.pX)(eq.BVt.CHANNEL(n, eM.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        M = i.useCallback(() => {
            (0, T.pX)(eq.BVt.CHANNEL(n, eM.VV.VIBEGRATIONS));
        }, [n]),
        z = i.useCallback((e) => {
            (m(e), v(null));
        }, []),
        X = (0, u.bG)(
            [$.Ay],
            () => {
                if (null == h) return null;
                let e = $.Ay.getProject(h);
                return null == e || (0, $.PV)(e) || e.guild_id === n ? e : null;
            },
            [h, n],
        ),
        U = (0, u.bG)([$.Ay], () => $.Ay.hasFetchedGuildProjects(n), [n]);
    return null != h
        ? (0, l.jsx)(ts, { project: X, projectsLoaded: U, onBack: M, guildId: n }, h)
        : (0, l.jsx)(to, {
              projects: s,
              sharedProjects: r,
              fetchState: o,
              modelSettings: I,
              onModelSettingsChange: N,
              idea: p,
              guildId: n,
              submitting: f,
              createError: j,
              createDisabled: "idea" === (t = Q({ idea: p, installScope: w, submitting: f })) || "submitting" === t,
              onSelectProject: D,
              onIdeaChange: z,
              onCreate: S,
              onImportNewProject: _,
              importing: P,
              installScope: w,
              onInstallScopeChange: E,
              installScopeError: C,
          });
}
