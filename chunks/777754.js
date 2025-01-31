n.d(t, { Z: () => c });
let i = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
    r = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
    a = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    s = /^(.*)#[0-9]{1,5}$/,
    o = /^(https:\/\/)?(discord\.com\/discovery\/game\/)([0-9-]+)\/?/,
    l = ['@', '#', ':', '```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage'],
    u = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord'],
    c = {
        isEmail: function (e) {
            return i.test(e);
        },
        isInvite: function (e) {
            return r.test(e);
        },
        isPhoneNumber: function (e) {
            return a.test(e);
        },
        isUserTagLike: function (e) {
            let t = s.exec(e);
            if (null != t && t.length > 1) {
                let e = t[1],
                    n = l.some((t) => e.includes(t)),
                    i = u.includes(e);
                return !n && !i;
            }
            return !1;
        },
        isDiscoveryLink: function (e) {
            return o.test(e);
        }
    };
