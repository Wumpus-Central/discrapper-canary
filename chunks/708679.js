n.d(t, { EP: () => A, Iy: () => S, JN: () => P, P6: () => C, RW: () => O, XU: () => I, YI: () => R, yN: () => L });
var s = n(636537),
    r = n(506774),
    l = n(73153),
    a = n(195880),
    i = n(347111),
    c = n(245179),
    o = n(89222),
    u = n(287111),
    d = n(322227),
    m = n(975189),
    f = n(371169),
    h = n(260498),
    x = n(652215),
    g = n(809526),
    p = n(105292);
let j = "ConjureHeldPrompts",
    v = new Map(),
    N = new Map();
function y(e, t) {
    let n =
        v.get(e) ??
        (async () => {
            try {
                await t();
            } catch (t) {
                throw (v.delete(e), t);
            }
        })();
    return (v.set(e, n), n);
}
function b() {
    return r.w.get(j) ?? {};
}
function w(e) {
    let { [e]: t, ...n } = b();
    r.w.set(j, n);
}
function A(e) {
    return b()[e]?.guildId;
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        s = arguments.length > 3 ? arguments[3] : void 0;
    if (h.Ay.getProject(e)?.install_scope_setup != null)
        r.w.set(j, { ...b(), [e]: { message: t, attachments: n, nonce: (0, a.m)(), guildId: s } });
    else (0, d.sendUserMessage)(e, t, n);
}
function E(e, t, n) {
    (w(e),
        (0, d.withdrawUserMessage)(e, t.nonce),
        "" === o.A.getDraft(e) && (0, i.I)(e, t.message),
        0 === (0, u.GU)(e, "chat").length &&
            (0, u.fD)(
                e,
                "chat",
                t.attachments.map((e) => ({
                    draft: { name: e.name, contentType: e.content_type, status: "ready", ref: e },
                })),
            ),
        n());
}
function S(e, t) {
    let n = b()[e],
        s = h.Ay.getProject(e);
    if (null == n || null == s || !c.A.hasLoadedHistory(e)) return;
    let l = c.A.getMessages(e),
        a = (0, d.optimisticMessageId)(n.nonce);
    if (!0 === n.sent) {
        let r = l.some((e) => "user" === e.role && !0 !== e.held && e.id !== a && e.content === n.message),
            i = c.A.getHistoryLoads(e) > (N.get(e) ?? 0);
        r
            ? w(e)
            : !i || null != s.install_scope_setup || c.A.isHistoryUnavailable(e) || c.A.isThinking(e) || E(e, n, t);
        return;
    }
    if (null != s.install_scope_setup) {
        l.some((e) => e.id === a) || (0, d.showUserMessage)(e, n.message, n.attachments, { held: !0, nonce: n.nonce });
        return;
    }
    "open" === d.default.getConnState(e) &&
        (r.w.set(j, { ...b(), [e]: { ...n, sent: !0 } }),
        N.set(e, c.A.getHistoryLoads(e)),
        (0, d.sendUserMessage)(e, n.message, n.attachments, { nonce: n.nonce }) || E(e, n, t));
}
function I(e, t) {
    if (0 === e.length) return {};
    let n = e.find((e) => e.id === t);
    return {
        input: "server",
        note: p.intl.string(g.default.SU9K9U),
        ...(null != n ? { default_entities: [{ id: n.id, name: n.name, kind: "server" }] } : {}),
    };
}
function R(e) {
    return {
        id: e.id,
        questions: e.questions.map((e) => ({
            id: e.id,
            question: e.question,
            recommendation_reason: "",
            options: [],
            allow_custom: !1,
            note: p.intl.string(g.default.ZKPaWY),
        })),
    };
}
async function k(e, t, n) {
    let r = await s.Bo.put({
        url: `${x.Rsh.CONJURE_PROJECT(e)}/install-scope`,
        body: { install_scope: t, ...(null != n ? { guild_id: n } : {}) },
        rejectWithError: !0,
    });
    l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: r.body });
}
function P(e, t, n) {
    return y(`settle:${e}`, async () => {
        try {
            await k(e, t, n);
        } catch (t) {
            if (409 !== t.status) throw t;
            await (0, f.U1)(e);
        }
    });
}
function L(e, t, n, s) {
    return y(`switch:${e}:${t}`, async () => {
        await k(e, n, s);
        let t = "guild" === n ? g.default["8+EcCu"] : g.default["U7+Yeh"];
        if (!(0, d.sendUserMessage)(e, p.intl.string(t))) throw Error("Not connected");
    });
}
function O(e) {
    return (0, m.b4)(e, "keep install scope", (e) => e.sendKeepInstallScope());
}
