n.d(t, { v: () => i });
var r = n(79255);
function i(e) {
    return {
        keyboardProps: e.isDisabled
            ? {}
            : {
                  onKeyDown: (0, r.x)(e.onKeyDown),
                  onKeyUp: (0, r.x)(e.onKeyUp),
              },
    };
}
