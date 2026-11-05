var n = a(734057),
    t = a(576705),
    i = a(652215);
a.d(
    l,
    {},
    {
        t: function (e) {
            let l = n.A.getChannel(e),
                a = l?.isPrivate(),
                o = l?.isForumChannel();
            return a || (t.A.can(i.xBc.ATTACH_FILES, l) && t.A.can(i.xBc.SEND_MESSAGES, l) && !o);
        },
    },
);
