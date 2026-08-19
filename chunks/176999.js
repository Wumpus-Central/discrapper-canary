"use strict";
n.d(t, { VG: () => p }), n(108089), n(779300);
var l,
    i = n(620632),
    s = n(832696),
    r = n(598748),
    a = n(894279),
    o = n(500620);
let u = s.Ikc({ value_type: s.k5n(o.o), presentation_type: s.k5n(a.P), value: s.YjP() }),
    c = s.Ikc({ value_type: s.k5n(o.o), presentation_type: s.k5n(a.P), value: s.YjP(), fallback: u.nullish() }),
    d = s.Ikc({ fields: s.jgl(s.YjP(), c) }),
    h = s.Ikc({ layout: s.YjP(), components: s.jgl(s.YjP(), d) });
s.jgl(s.k5n(r.m), h);
var m = (((l = {})[(l.STRING = 1)] = "STRING"), (l[(l.NUMBER = 2)] = "NUMBER"), (l[(l.MEDIA = 3)] = "MEDIA"), l);
function f(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function p(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: i.o.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, l] of Object.entries(t))
                      if ("string" == typeof l) n[e] = { type: i.o.STRING, value: l };
                      else if ("number" == typeof l) n[e] = { type: i.o.NUMBER, value: l };
                      else if ("object" == typeof l && "url" in l && "proxy_url" in l && "loading_state" in l) {
                          if (!f(l)) continue;
                          n[e] = { type: i.o.MEDIA, media: { url: l.proxy_url, width: l.width, height: l.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === m.STRING) n[e.name] = { type: i.o.STRING, value: e.value };
                      else if (e.type === m.NUMBER) n[e.name] = { type: i.o.NUMBER, value: e.value };
                      else if (e.type === m.MEDIA) {
                          if (!f(e.value)) continue;
                          n[e.name] = {
                              type: i.o.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
