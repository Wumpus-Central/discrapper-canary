var n = a(734057),
    t = a(576705),
    i = a(652215);
a.d(
    e,
    {},
    {
        t: function (l) {
            let e = n.A.getChannel(l),
                a = e?.isPrivate(),
                d = e?.isForumChannel();
            return a || (t.A.can(i.xBc.ATTACH_FILES, e) && t.A.can(i.xBc.SEND_MESSAGES, e) && !d);
        },
    },
);
