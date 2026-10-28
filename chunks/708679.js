n.d(t, { Iy: () => E, JN: () => k, P6: () => C, RW: () => O, XU: () => R, YI: () => S, yN: () => L });
var s = n(636537),
    a = n(506774),
    l = n(73153),
    r = n(195880),
    i = n(347111),
    o = n(245179),
    c = n(89222),
    u = n(287111),
    d = n(889921),
    m = n(975189),
    f = n(371169),
    h = n(260498),
    x = n(652215),
    p = n(248675),
    g = n(105292);
let v = "ConjureHeldPrompts",
    j = new Map(),
    N = new Map();
function b(e, t) {
    let n =
        j.get(e) ??
        (async () => {
            try {
                await t();
            } catch (t) {
                throw (j.delete(e), t);
            }
        })();
    return (j.set(e, n), n);
}
function y() {
    return a.w.get(v) ?? {};
}
function w(e) {
    let { [e]: t, ...n } = y();
    a.w.set(v, n);
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (h.Ay.getProject(e)?.install_scope_setup != null)
        a.w.set(v, { ...y(), [e]: { message: t, attachments: n, nonce: (0, r.m)() } });
    else (0, d.sendUserMessage)(e, t, n);
}
function A(e, t, n) {
    (w(e),
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
        n());
}
function E(e, t) {
    let n = y()[e],
        s = h.Ay.getProject(e);
    if (null == n || null == s || !o.A.hasLoadedHistory(e)) return;
    let l = o.A.getMessages(e),
        r = (0, d.optimisticMessageId)(n.nonce);
    if (!0 === n.sent) {
        let a = l.some((e) => "user" === e.role && !0 !== e.held && e.id !== r && e.content === n.message),
            i = o.A.getHistoryLoads(e) > (N.get(e) ?? 0);
        a
            ? w(e)
            : !i || null != s.install_scope_setup || o.A.isHistoryUnavailable(e) || o.A.isThinking(e) || A(e, n, t);
        return;
    }
    if (null != s.install_scope_setup) {
        l.some((e) => e.id === r) || (0, d.showUserMessage)(e, n.message, n.attachments, { held: !0, nonce: n.nonce });
        return;
    }
    "open" === d.default.getConnState(e) &&
        (a.w.set(v, { ...y(), [e]: { ...n, sent: !0 } }),
        N.set(e, o.A.getHistoryLoads(e)),
        (0, d.sendUserMessage)(e, n.message, n.attachments, { nonce: n.nonce }) || A(e, n, t));
}
function R(e, t) {
    if (0 === e.length) return {};
    let n = e.find((e) => e.id === t);
    return {
        input: "server",
        note: g.intl.string(p.default.SU9K9U),
        ...(null != n ? { default_entities: [{ id: n.id, name: n.name, kind: "server" }] } : {}),
    };
}
function S(e) {
    return {
        id: e.id,
        questions: e.questions.map((e) => ({
            id: e.id,
            question: e.question,
            recommendation_reason: "",
            options: [],
            allow_custom: !1,
            note: g.intl.string(p.default.ZKPaWY),
        })),
    };
}
async function I(e, t, n) {
    let a = await s.Bo.put({
        url: `${x.Rsh.CONJURE_PROJECT(e)}/install-scope`,
        body: { install_scope: t, ...(null != n ? { guild_id: n } : {}) },
        rejectWithError: !0,
    });
    l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: a.body });
}
function k(e, t, n) {
    return b(`settle:${e}`, async () => {
        try {
            await I(e, t, n);
        } catch (t) {
            if (409 !== t.status) throw t;
            await (0, f.U1)(e);
        }
    });
}
function L(e, t, n, s) {
    return b(`switch:${e}:${t}`, async () => {
        await I(e, n, s);
        let t = "guild" === n ? p.default["8+EcCu"] : p.default["U7+Yeh"];
        if (!(0, d.sendUserMessage)(e, g.intl.string(t))) throw Error("Not connected");
    });
}
function O(e) {
    return (0, m.b4)(e, "keep install scope", (e) => e.sendKeepInstallScope());
}
