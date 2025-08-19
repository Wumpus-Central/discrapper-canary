n.d(t, {
    Bm: () => A,
    P7: () => N,
    X: () => w,
    ae: () => P,
});
var r,
    i,
    l = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    c = n(25209),
    u = n(755721),
    d = n(2052),
    p = n(542094),
    m = n(513202),
    f = n(367907),
    g = n(213459),
    _ = n(895924),
    h = n(691424),
    b = n(428595),
    E = n(364458),
    C = n(585483),
    v = n(499254),
    O = n(541099),
    y = n(827498),
    x = n(346683),
    j = n(981631),
    I = n(388032);
let S =
        ((r = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, b.Z.RULES.commandMention)),
        (i = i = { parse: (e, t, n) => ({ content: b.Z.RULES.commandMention.parse(e, t, n).content }) }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(i)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
              }),
        r),
    T = o().pick(
        (0, E.Z)([
            b.Z.RULES,
            { commandMention: S },
            (0, h.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1,
            }),
        ]),
        [
            "commandMention",
            "customEmoji",
            "em",
            "emoji",
            "emoticon",
            "highlight",
            "inlineCode",
            "looseEm",
            "s",
            "strong",
            "text",
            "timestamp",
            "u",
            "spoiler",
        ],
    ),
    P = c.w4(T);
function N(e) {
    let {
            context: t,
            application: n,
            location: r,
            sectionName: i,
            commandName: a,
            autoDismissOnClick: o = !0,
            launchingComponentId: c,
            submitting: h = !1,
            fetchesApplication: b = !0,
            onConfirmActivityLaunchChecksAlertOpen: E,
        } = e,
        C = (0, d.O)(),
        S = (0, p.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: b,
        }),
        T = (0, x.Q)(S),
        P = (0, s.e7)([O.Z], () => O.Z.entrypoint()),
        N = l.useMemo(() => {
            var e, r, i;
            if ("channel" !== t.type)
                return null != (i = null == (e = n.bot) ? void 0 : e.id)
                    ? i
                    : null == (r = (0, g.If)(t, n.id).descriptor)
                      ? void 0
                      : r.botId;
        }, [t, n.id, n.bot]),
        A = (0, p.w1)({
            application: n,
            botUserIdForAppDM: N,
            embeddedActivitiesManager: m.Z,
            context: t,
            locationObject: C.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                o && v.yT(y.ti.ACTIVITY),
                    (0, f.yw)(j.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: r,
                        application_id: t,
                        section_name: i,
                        action: T,
                        source: P,
                    });
            },
            launchingComponentId: c,
            commandOrigin: _.bB.APPLICATION_LAUNCHER,
            sectionName: i,
            source: P,
            fetchesApplication: b,
            onConfirmActivityLaunchChecksAlertOpen: E,
        }),
        w = "primary",
        Z = u.Tt.BRAND,
        R = null != a ? a : I.intl.string(I.t.zKX8Nj);
    return (
        T === p.JS.JOIN
            ? ((w = "active"), (Z = u.Tt.GREEN), (R = I.intl.string(I.t.d9PsMj)))
            : T !== p.JS.LEAVE || h || ((w = "critical-primary"), (R = I.intl.string(I.t["Hi1/aW"]))),
        {
            onActivityItemSelected: A,
            activityAction: T,
            buttonVariant: w,
            buttonColor: Z,
            buttonText: R,
        }
    );
}
function A(e, t) {
    let n = O.Z.entrypoint(),
        r = l.useMemo(
            () =>
                (0, a.debounce)(
                    (e, t) => {
                        (0, f.yw)(j.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                            type: e,
                            source: t,
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0,
                    },
                ),
            [],
        );
    l.useEffect(() => {
        null != e && r(e, n);
    }, [e, t, n, r]);
}
function w(e) {
    C.S.dispatchToLastSubscribed(j.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
