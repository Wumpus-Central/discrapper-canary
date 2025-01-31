function i(e) {
    let t = e.getContext('2d');
    return null == t
        ? null
        : {
              render: (e) => {
                  t.putImageData(e, 0, 0);
              }
          };
}
n.d(t, { y: () => i });
