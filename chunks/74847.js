var a = n(734057),
    t = n(576705),
    i = n(652215);
n.d(
    l,
    {},
    {
        t: function (e) {
            let l = a.A.getChannel(e),
                n = l?.isPrivate(),
                o = l?.isForumChannel();
            return n || (t.A.can(i.xBc.ATTACH_FILES, l) && t.A.can(i.xBc.SEND_MESSAGES, l) && !o);
        },
    },
);
