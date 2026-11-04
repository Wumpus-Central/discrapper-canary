let c = null;
u.d(
    n,
    {},
    {
        v: function () {
            if (null == c)
                try {
                    c = new AudioContext();
                } catch (t) {}
            return c;
        },
    },
);
