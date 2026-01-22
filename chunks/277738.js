n.d(t, {
    DT: () => f,
    _e: () => u,
    gY: () => a,
    oG: () => p,
    sq: () => i,
    tS: () => d,
}),
    n(142703),
    n(321073);
var r = n(731854);
let i = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
    a = i && "setSinkId" in HTMLAudioElement.prototype;

function s(e) {
    return {
        id: r.dx,
        type: e,
        index: 0,
        name: "Default",
    };
}

function o() {
    return [s(r.oh.AUDIO_INPUT), s(r.oh.AUDIO_OUTPUT), s(r.oh.VIDEO_INPUT)];
}

function l(e, t) {
    return e.filter((e) => e.type === t);
}

function c() {
    return i
        ? navigator.mediaDevices
              .enumerateDevices()
              .then((e) => {
                  let t = 0,
                      n = 0,
                      i = 0;
                  return e
                      .filter((e) => {
                          switch (e.kind) {
                              case r.oh.AUDIO_INPUT:
                              case r.oh.AUDIO_OUTPUT:
                              case r.oh.VIDEO_INPUT:
                                  return !0;
                              default:
                                  return !1;
                          }
                      })
                      .map((e) => {
                          let a;
                          switch (e.kind) {
                              case r.oh.AUDIO_INPUT:
                                  a = t++;
                                  break;
                              case r.oh.AUDIO_OUTPUT:
                                  a = n++;
                                  break;
                              case r.oh.VIDEO_INPUT:
                              default:
                                  a = i++;
                          }
                          return {
                              id: e.deviceId,
                              type: e.kind,
                              index: a,
                              name:
                                  null != e.label && "" !== e.label
                                      ? e.label
                                      : 0 === a
                                        ? "Default"
                                        : "Device ".concat(a),
                          };
                      });
              })
              .then((e) => (a || (e = e.filter((e) => e.type !== r.oh.AUDIO_OUTPUT)).push(s(r.oh.AUDIO_OUTPUT)), e))
              .catch(o)
        : new Promise((e) => {
              setImmediate(() => e(o()));
          });
}
async function u() {
    return l(await c(), r.oh.AUDIO_INPUT);
}
async function d() {
    return l(await c(), r.oh.AUDIO_OUTPUT);
}
async function f() {
    return l(await c(), r.oh.VIDEO_INPUT);
}
async function p() {
    let e = await c();
    return [l(e, r.oh.AUDIO_INPUT), l(e, r.oh.AUDIO_OUTPUT), l(e, r.oh.VIDEO_INPUT)];
}
