a.d(t, { Iy: () => E, JN: () => k, P6: () => w, RW: () => L, XU: () => S, YI: () => R, yN: () => O });
var s = a(636537),
    n = a(506774),
    l = a(73153),
    r = a(195880),
    i = a(347111),
    o = a(245179),
    c = a(89222),
    u = a(287111),
    d = a(319481),
    m = a(975189),
    f = a(371169),
    h = a(260498),
    x = a(652215),
    g = a(248675),
    p = a(105292);
let v = "ConjureHeldPrompts",
    j = new Map(),
    N = new Map();
function b(e, t) {
    let a =
        j.get(e) ??
        (async () => {
            try {
                await t();
            } catch (t) {
                throw (j.delete(e), t);
            }
        })();
    return (j.set(e, a), a);
}
function y() {
    return n.w.get(v) ?? {};
}
function C(e) {
    let { [e]: t, ...a } = y();
    n.w.set(v, a);
}
function w(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (h.Ay.getProject(e)?.install_scope_setup != null)
        n.w.set(v, { ...y(), [e]: { message: t, attachments: a, nonce: (0, r.m)() } });
    else (0, d.sendUserMessage)(e, t, a);
}
function A(e, t, a) {
    (C(e),
        (0, d.withdrawUserMessage)(e, t.nonce),
        "" === c.A.getDraft(e) && (0, i.I)(e, t.message),
        0 === (0, u.GU)(e, "chat").length &&
            (0, u.fD)(
                e,
                "chat",
                t.attachments.map((e) => ({
                    draft: { name: e.name, contentType: e.content_type, status: "ready", ref: e },
                })),
            ),
        a());
}
function E(e, t) {
    let a = y()[e],
        s = h.Ay.getProject(e);
    if (null == a || null == s || !o.A.hasLoadedHistory(e)) return;
    let l = o.A.getMessages(e),
        r = (0, d.optimisticMessageId)(a.nonce);
    if (!0 === a.sent) {
        let n = l.some((e) => "user" === e.role && !0 !== e.held && e.id !== r && e.content === a.message),
            i = o.A.getHistoryLoads(e) > (N.get(e) ?? 0);
        n
            ? C(e)
            : !i || null != s.install_scope_setup || o.A.isHistoryUnavailable(e) || o.A.isThinking(e) || A(e, a, t);
        return;
    }
    if (null != s.install_scope_setup) {
        l.some((e) => e.id === r) || (0, d.showUserMessage)(e, a.message, a.attachments, { held: !0, nonce: a.nonce });
        return;
    }
    "open" === d.default.getConnState(e) &&
        (n.w.set(v, { ...y(), [e]: { ...a, sent: !0 } }),
        N.set(e, o.A.getHistoryLoads(e)),
        (0, d.sendUserMessage)(e, a.message, a.attachments, { nonce: a.nonce }) || A(e, a, t));
}
function S(e, t) {
    if (0 === e.length) return {};
    let a = e.find((e) => e.id === t);
    return {
        input: "server",
        note: p.intl.string(g.default.SU9K9U),
        ...(null != a ? { default_entities: [{ id: a.id, name: a.name, kind: "server" }] } : {}),
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
async function I(e, t, a) {
    let n = await s.Bo.put({
        url: `${x.Rsh.CONJURE_PROJECT(e)}/install-scope`,
        body: { install_scope: t, ...(null != a ? { guild_id: a } : {}) },
        rejectWithError: !0,
    });
    l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: n.body });
}
function k(e, t, a) {
    return b(`settle:${e}`, async () => {
        try {
            await I(e, t, a);
        } catch (t) {
            if (409 !== t.status) throw t;
            await (0, f.U1)(e);
        }
    });
}
function O(e, t, a, s) {
    return b(`switch:${e}:${t}`, async () => {
        await I(e, a, s);
        let t = "guild" === a ? g.default["8+EcCu"] : g.default["U7+Yeh"];
        if (!(0, d.sendUserMessage)(e, p.intl.string(t))) throw Error("Not connected");
    });
}
function L(e) {
    return (0, m.b4)(e, "keep install scope", (e) => e.sendKeepInstallScope());
}
