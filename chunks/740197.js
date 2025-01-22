r.d(n, {
    HS: function () {
        return h;
    },
    Hg: function () {
        return p;
    },
    PW: function () {
        return m;
    },
    S5: function () {
        return s;
    },
    ZA: function () {
        return l;
    },
    l0: function () {
        return _;
    }
});
var i = r(177593);
var a = r(653041);
var o = r(65154);
let s = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
    l = s && 'setSinkId' in HTMLAudioElement.prototype;
function u(e) {
    return {
        id: o.w5,
        type: e,
        index: 0,
        name: 'Default'
    };
}
function c() {
    return [u(o.h7.AUDIO_INPUT), u(o.h7.AUDIO_OUTPUT), u(o.h7.VIDEO_INPUT)];
}
function d(e, n) {
    return e.filter((e) => e.type === n);
}
function f() {
    return s
        ? navigator.mediaDevices
              .enumerateDevices()
              .then((e) => {
                  let n = 0,
                      r = 0,
                      i = 0;
                  return e
                      .filter((e) => {
                          switch (e.kind) {
                              case o.h7.AUDIO_INPUT:
                              case o.h7.AUDIO_OUTPUT:
                              case o.h7.VIDEO_INPUT:
                                  return !0;
                              default:
                                  return !1;
                          }
                      })
                      .map((e) => {
                          let a;
                          switch (e.kind) {
                              case o.h7.AUDIO_INPUT:
                                  a = n++;
                                  break;
                              case o.h7.AUDIO_OUTPUT:
                                  a = r++;
                                  break;
                              case o.h7.VIDEO_INPUT:
                              default:
                                  a = i++;
                          }
                          return {
                              id: e.deviceId,
                              type: e.kind,
                              index: a,
                              name: null != e.label && '' !== e.label ? e.label : 0 === a ? 'Default' : 'Device '.concat(a)
                          };
                      });
              })
              .then((e) => (!l && (e = e.filter((e) => e.type !== o.h7.AUDIO_OUTPUT)).push(u(o.h7.AUDIO_OUTPUT)), e))
              .catch(c)
        : new Promise((e) => {
              setImmediate(() => e(c()));
          });
}
async function p() {
    return d(await f(), o.h7.AUDIO_INPUT);
}
async function h() {
    return d(await f(), o.h7.AUDIO_OUTPUT);
}
async function _() {
    return d(await f(), o.h7.VIDEO_INPUT);
}
async function m() {
    let e = await f();
    return [d(e, o.h7.AUDIO_INPUT), d(e, o.h7.AUDIO_OUTPUT), d(e, o.h7.VIDEO_INPUT)];
}
