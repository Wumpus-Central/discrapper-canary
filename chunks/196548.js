n.d(t, { VV: () => r });
let r = {
    Layout: {
        SPACE_0: 0,
        SPACE_4: 4,
        SPACE_6: 6,
        SPACE_8: 8,
        SPACE_10: 10,
        SPACE_12: 12,
        SPACE_16: 16,
        SPACE_20: 20,
        SPACE_24: 24,
        SPACE_26: 26,
        SPACE_30: 30,
        SPACE_32: 32,
        SPACE_40: 40,
        SPACE_48: 48,
        SPACE_64: 64,
        SPACE_80: 80,
        SPACE_96: 96,
        SPACE_128: 128,
        SPACE_160: 160,
        SPACE_192: 192,
        SPACE_XXS: 'var(--space-xxs)',
        SPACE_XS: 'var(--space-xs)',
        SPACE_SM: 'var(--space-sm)',
        SPACE_MD: 'var(--space-md)',
        SPACE_LG: 'var(--space-lg)',
        SPACE_XL: 'var(--space-xl)',
        SPACE_XXL: 'var(--space-xxl)',
        SIZE_0: 0,
        SIZE_4: 4,
        SIZE_8: 8,
        SIZE_12: 12,
        SIZE_16: 16,
        SIZE_20: 20,
        SIZE_24: 24,
        SIZE_32: 32,
        SIZE_48: 48,
        SIZE_64: 64,
        SIZE_80: 80,
        SIZE_96: 96,
        SIZE_128: 128,
        SIZE_160: 160,
        SIZE_192: 192,
        SIZE_XXS: 'var(--size-xxs)',
        SIZE_XS: 'var(--size-xs)',
        SIZE_SM: 'var(--size-sm)',
        SIZE_MD: 'var(--size-md)',
        SIZE_LG: 'var(--size-lg)',
        SIZE_XL: 'var(--size-xl)',
        SIZE_XXL: 'var(--size-xxl)',
        BREAKPOINT_480: 480,
        BREAKPOINT_640: 640,
        BREAKPOINT_768: 768,
        BREAKPOINT_1024: 1024,
        BREAKPOINT_1280: 1280,
        BREAKPOINT_1536: 1536,
        BREAKPOINT_1800: 1800,
        BREAKPOINT_2500: 2500,
        BREAKPOINT_XXS: 'var(--breakpoint-xxs)',
        BREAKPOINT_XS: 'var(--breakpoint-xs)',
        BREAKPOINT_SM: 'var(--breakpoint-sm)',
        BREAKPOINT_MD: 'var(--breakpoint-md)',
        BREAKPOINT_LG: 'var(--breakpoint-lg)',
        BREAKPOINT_XL: 'var(--breakpoint-xl)',
        BREAKPOINT_XXL: 'var(--breakpoint-xxl)',
        BREAKPOINT_MAX: 'var(--breakpoint-max)'
    },
    Space: {
        SPACE_0: {
            css: '0px',
            resolve: () => 0
        },
        SPACE_4: {
            css: '4px',
            resolve: () => 4
        },
        SPACE_6: {
            css: '6px',
            resolve: () => 6
        },
        SPACE_8: {
            css: '8px',
            resolve: () => 8
        },
        SPACE_10: {
            css: '10px',
            resolve: () => 10
        },
        SPACE_12: {
            css: '12px',
            resolve: () => 12
        },
        SPACE_16: {
            css: '16px',
            resolve: () => 16
        },
        SPACE_20: {
            css: '20px',
            resolve: () => 20
        },
        SPACE_24: {
            css: '24px',
            resolve: () => 24
        },
        SPACE_26: {
            css: '26px',
            resolve: () => 26
        },
        SPACE_30: {
            css: '30px',
            resolve: () => 30
        },
        SPACE_32: {
            css: '32px',
            resolve: () => 32
        },
        SPACE_40: {
            css: '40px',
            resolve: () => 40
        },
        SPACE_48: {
            css: '48px',
            resolve: () => 48
        },
        SPACE_64: {
            css: '64px',
            resolve: () => 64
        },
        SPACE_80: {
            css: '80px',
            resolve: () => 80
        },
        SPACE_96: {
            css: '96px',
            resolve: () => 96
        },
        SPACE_128: {
            css: '128px',
            resolve: () => 128
        },
        SPACE_160: {
            css: '160px',
            resolve: () => 160
        },
        SPACE_192: {
            css: '192px',
            resolve: () => 192
        },
        SPACE_XXS: {
            css: 'var(--space-xxs)',
            resolve: (e) => {
                switch (e) {
                    case 'compact':
                    case 'cozy':
                    case 'default':
                        return 4;
                }
            }
        },
        SPACE_XS: {
            css: 'var(--space-xs)',
            resolve: (e) => {
                switch (e) {
                    case 'compact':
                        return 6;
                    case 'cozy':
                        return 10;
                    case 'default':
                        return 8;
                }
            }
        },
        SPACE_SM: {
            css: 'var(--space-sm)',
            resolve: (e) => {
                switch (e) {
                    case 'compact':
                        return 10;
                    case 'cozy':
                        return 16;
                    case 'default':
                        return 12;
                }
            }
        },
        SPACE_MD: {
            css: 'var(--space-md)',
            resolve: (e) => {
                switch (e) {
                    case 'compact':
                        return 12;
                    case 'cozy':
                        return 20;
                    case 'default':
                        return 16;
                }
            }
        },
        SPACE_LG: {
            css: 'var(--space-lg)',
            resolve: (e) => {
                switch (e) {
                    case 'compact':
                        return 16;
                    case 'cozy':
                        return 24;
                    case 'default':
                        return 20;
                }
            }
        },
        SPACE_XL: {
            css: 'var(--space-xl)',
            resolve: (e) => {
                switch (e) {
                    case 'compact':
                        return 20;
                    case 'cozy':
                        return 30;
                    case 'default':
                        return 24;
                }
            }
        },
        SPACE_XXL: {
            css: 'var(--space-xxl)',
            resolve: (e) => {
                switch (e) {
                    case 'compact':
                        return 26;
                    case 'cozy':
                        return 40;
                    case 'default':
                        return 32;
                }
            }
        }
    }
};
