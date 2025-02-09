n.d(t, { Q: () => l });
var i = n(381499),
    s = n(675478);
let l = (e) =>
    s.hW.updateAsync(
        'privacy',
        (t) => {
            t.inappropriateConversationWarnings = i.D5.create({ value: e });
        },
        s.fy.INFREQUENT_USER_ACTION
    );
