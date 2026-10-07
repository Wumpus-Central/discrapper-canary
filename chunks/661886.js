n.d(t, { A: () => c });
var i = n(17928),
    r = n(73153),
    a = n(206885),
    s = n(96175);
let l = (0, s.I2)();
function o() {
    l = (0, s.I2)();
}
class d extends i.Ay.Store {
    static displayName = "OverlayPopoutInitializationStore";
    getPopoutInitializationStages() {
        return l;
    }
    isWindowHandleInitialized() {
        return l.windowHandleSentToNative;
    }
}
let c = new d(
    r.h,
    __OVERLAY__ || !a.O
        ? {}
        : {
              OVERLAY_OOP_UI_INITIALIZED: function () {
                  l = { ...l, allDone: !0 };
              },
              OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: function () {
                  l = { ...l, showInactiveCalled: !0 };
              },
              OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: function (e) {
                  let { update: t } = e;
                  l = { ...l, ...t };
              },
              OVERLAY_V3_PRE_CREATE_POPOUT: o,
              OVERLAY_V3_POST_CREATE_POPOUT: function () {
                  l = { ...l, popoutOpened: !0 };
              },
              OVERLAY_V3_WINDOW_CREATION_FAILURE: function (e) {
                  let { error: t } = e;
                  l = { ...l, errorMessage: "Error in _createOutOfProcessOverlayHostWindow: " + t };
              },
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                  o();
              },
              OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: function (e) {
                  let { initialized: t } = e;
                  l = { ...l, windowHandleSentToNative: t };
              },
          },
);
