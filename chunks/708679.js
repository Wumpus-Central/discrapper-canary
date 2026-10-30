s.d(t, { EP: () => A, Iy: () => R, JN: () => P, P6: () => C, RW: () => O, XU: () => S, YI: () => I, yN: () => L });
var n = s(636537),
    a = s(506774),
    l = s(73153),
    r = s(195880),
    i = s(347111),
    c = s(245179),
    o = s(89222),
    u = s(287111),
    d = s(322227),
    m = s(975189),
    f = s(371169),
    h = s(260498),
    x = s(652215),
    g = s(87501),
    p = s(105292);
let j = "ConjureHeldPrompts",
    v = new Map(),
    N = new Map();
function b(e, t) {
    let s =
        v.get(e) ??
        (async () => {
            try {
                await t();
            } catch (t) {
                throw (v.delete(e), t);
            }
        })();
    return (v.set(e, s), s);
}
function y() {
    return a.w.get(j) ?? {};
}
function w(e) {
    let { [e]: t, ...s } = y();
    a.w.set(j, s);
}
function A(e) {
    return y()[e]?.guildId;
}
function C(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = arguments.length > 3 ? arguments[3] : void 0;
    if (h.Ay.getProject(e)?.install_scope_setup != null)
        a.w.set(j, { ...y(), [e]: { message: t, attachments: s, nonce: (0, r.m)(), guildId: n } });
    else (0, d.sendUserMessage)(e, t, s);
}
function E(e, t, s) {
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
        s());
}
function R(e, t) {
    let s = y()[e],
        n = h.Ay.getProject(e);
    if (null == s || null == n || !c.A.hasLoadedHistory(e)) return;
    let l = c.A.getMessages(e),
        r = (0, d.optimisticMessageId)(s.nonce);
    if (!0 === s.sent) {
        let a = l.some((e) => "user" === e.role && !0 !== e.held && e.id !== r && e.content === s.message),
            i = c.A.getHistoryLoads(e) > (N.get(e) ?? 0);
        a
            ? w(e)
            : !i || null != n.install_scope_setup || c.A.isHistoryUnavailable(e) || c.A.isThinking(e) || E(e, s, t);
        return;
    }
    if (null != n.install_scope_setup) {
        l.some((e) => e.id === r) || (0, d.showUserMessage)(e, s.message, s.attachments, { held: !0, nonce: s.nonce });
        return;
    }
    "open" === d.default.getConnState(e) &&
        (a.w.set(j, { ...y(), [e]: { ...s, sent: !0 } }),
        N.set(e, c.A.getHistoryLoads(e)),
        (0, d.sendUserMessage)(e, s.message, s.attachments, { nonce: s.nonce }) || E(e, s, t));
}
function S(e, t) {
    if (0 === e.length) return {};
    let s = e.find((e) => e.id === t);
    return {
        input: "server",
        note: p.intl.string(g.default.SU9K9U),
        ...(null != s ? { default_entities: [{ id: s.id, name: s.name, kind: "server" }] } : {}),
    };
}
function I(e) {
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
async function k(e, t, s) {
    let a = await n.Bo.put({
        url: `${x.Rsh.CONJURE_PROJECT(e)}/install-scope`,
        body: { install_scope: t, ...(null != s ? { guild_id: s } : {}) },
        rejectWithError: !0,
    });
    l.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: a.body });
}
function P(e, t, s) {
    return b(`settle:${e}`, async () => {
        try {
            await k(e, t, s);
        } catch (t) {
            if (409 !== t.status) throw t;
            await (0, f.U1)(e);
        }
    });
}
function L(e, t, s, n) {
    return b(`switch:${e}:${t}`, async () => {
        await k(e, s, n);
        let t = "guild" === s ? g.default["8+EcCu"] : g.default["U7+Yeh"];
        if (!(0, d.sendUserMessage)(e, p.intl.string(t))) throw Error("Not connected");
    });
}
function O(e) {
    return (0, m.b4)(e, "keep install scope", (e) => e.sendKeepInstallScope());
}
