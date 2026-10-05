(l.d(t, { VG: () => p, oG: () => a.o, uW: () => v }), l(108089), l(779300));
var n,
    a = l(620632),
    s = l(832696),
    i = l(598748),
    r = l(894279),
    o = l(500620);
let u = s.Ikc({ value_type: s.k5n(o.o), presentation_type: s.k5n(r.P), value: s.YjP() }),
    c = s.Ikc({ value_type: s.k5n(o.o), presentation_type: s.k5n(r.P), value: s.YjP(), fallback: u.nullish() }),
    m = s.Ikc({ fields: s.jgl(s.YjP(), c) }),
    d = s.Ikc({ layout: s.YjP(), components: s.jgl(s.YjP(), m) }),
    v = s.jgl(s.k5n(i.m), d);
var x = (((n = {})[(n.STRING = 1)] = "STRING"), (n[(n.NUMBER = 2)] = "NUMBER"), (n[(n.MEDIA = 3)] = "MEDIA"), n);
function f(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function p(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: a.o.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      l = {};
                  if (null == t) return l;
                  for (let [e, n] of Object.entries(t))
                      if ("string" == typeof n) l[e] = { type: a.o.STRING, value: n };
                      else if ("number" == typeof n) l[e] = { type: a.o.NUMBER, value: n };
                      else if ("object" == typeof n && "url" in n && "proxy_url" in n && "loading_state" in n) {
                          if (!f(n)) continue;
                          l[e] = { type: a.o.MEDIA, media: { url: n.proxy_url, width: n.width, height: n.height } };
                      }
                  return l;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      l = {};
                  if (null == t) return l;
                  for (let e of t)
                      if (e.type === x.STRING) l[e.name] = { type: a.o.STRING, value: e.value };
                      else if (e.type === x.NUMBER) l[e.name] = { type: a.o.NUMBER, value: e.value };
                      else if (e.type === x.MEDIA) {
                          if (!f(e.value)) continue;
                          l[e.name] = {
                              type: a.o.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return l;
              })(e),
          };
}
