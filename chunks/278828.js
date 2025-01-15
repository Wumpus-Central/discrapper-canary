n.d(t, {
    Q: function () {
        return s;
    }
});
var i = n(381499),
    r = n(675478);
let s = (e) =>
    r.hW.updateAsync(
        'privacy',
        (t) => {
            t.inappropriateConversationWarnings = i.D5.create({ value: e });
        },
        r.fy.INFREQUENT_USER_ACTION
    );
