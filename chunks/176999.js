"use strict";
n.d(t, { VG: () => h }), n(108089), n(779300);
var i,
    r = n(620632),
    a = n(832696),
    s = n(598748),
    l = n(894279),
    o = n(500620);
let d = a.Ikc({ value_type: a.k5n(o.o), presentation_type: a.k5n(l.P), value: a.YjP() }),
    c = a.Ikc({ value_type: a.k5n(o.o), presentation_type: a.k5n(l.P), value: a.YjP(), fallback: d.nullish() }),
    u = a.Ikc({ fields: a.jgl(a.YjP(), c) }),
    _ = a.Ikc({ layout: a.YjP(), components: a.jgl(a.YjP(), u) });
a.jgl(a.k5n(s.m), _);
var E = (((i = {})[(i.STRING = 1)] = "STRING"), (i[(i.NUMBER = 2)] = "NUMBER"), (i[(i.MEDIA = 3)] = "MEDIA"), i);
function A(e) {
    return null != e.width && e.width > 0 && null != e.height && e.height > 0;
}
function h(e) {
    let t;
    return null == e
        ? {}
        : {
              ...((t = {}), null != e.username && (t.username = { type: r.o.STRING, value: e.username }), t),
              ...(function (e) {
                  let t = e.data?.primary,
                      n = {};
                  if (null == t) return n;
                  for (let [e, i] of Object.entries(t))
                      if ("string" == typeof i) n[e] = { type: r.o.STRING, value: i };
                      else if ("number" == typeof i) n[e] = { type: r.o.NUMBER, value: i };
                      else if ("object" == typeof i && "url" in i && "proxy_url" in i && "loading_state" in i) {
                          if (!A(i)) continue;
                          n[e] = { type: r.o.MEDIA, media: { url: i.proxy_url, width: i.width, height: i.height } };
                      }
                  return n;
              })(e),
              ...(function (e) {
                  let t = e.data?.dynamic,
                      n = {};
                  if (null == t) return n;
                  for (let e of t)
                      if (e.type === E.STRING) n[e.name] = { type: r.o.STRING, value: e.value };
                      else if (e.type === E.NUMBER) n[e.name] = { type: r.o.NUMBER, value: e.value };
                      else if (e.type === E.MEDIA) {
                          if (!A(e.value)) continue;
                          n[e.name] = {
                              type: r.o.MEDIA,
                              media: { url: e.value.proxy_url, width: e.value.width, height: e.value.height },
                          };
                      }
                  return n;
              })(e),
          };
}
