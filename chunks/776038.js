n.d(t, { a: () => l });
var i = n(406935),
    s = n(594061);
let l = (e) =>
    s.wc.updateAsync(
        "privacy",
        (t) => {
            t.inappropriateConversationWarnings = i._t.create({ value: e });
        },
        s.Sb.INFREQUENT_USER_ACTION,
    );
