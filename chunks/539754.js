n.d(t, { I: () => c }), n(896048);
var r = n(179771),
    i = n(859703),
    l = n(792620),
    a = n(636401),
    s = n(629471),
    o = n(652215);
let c = {
    [o.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE]: {
        scope: r.F.IDENTIFY,
        validation: (e) => (0, s.A)(e).required().keys({ quest_id: e.string().required() }),
        handler: function (e) {
            let {
                    args: { quest_id: t },
                    socket: n,
                } = e,
                r = i.A.getQuest(t),
                s = (0, l.TP)(r);
            if (null == r || null == s || s !== n.application.id)
                throw new a.A({ errorCode: o.Lw6.INVALID_COMMAND }, "Quest not found: ".concat(t));
        },
    },
};
