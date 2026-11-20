var r = n(855986),
    s = n(73153);
let i = new Map();
class o extends r.Ay.Store {
    getPrompt(e) {
        return i.get(e) ?? null;
    }
}
let l = new o(s.h, {
        CONJURE_PREVIEW_ADD_BOT_PROMPT_SET(e) {
            let { projectId: t, prompt: n } = e;
            return (i.get(t)?.id ?? null) !== (n?.id ?? null) && (null == n ? i.delete(t) : i.set(t, n), !0);
        },
    }),
    a = 221552 == n.j ? l : null;
n.d(t, {}, { A: a });
